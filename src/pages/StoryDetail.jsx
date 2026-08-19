import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FileText, Bookmark, ExternalLink } from 'lucide-react'
import ProfileHeader from '../components/ProfileHeader.jsx'
import JourneySection from '../components/JourneySection.jsx'

function StoryDetail({ stories, pendingStories }) {
  const { id } = useParams()

  // Find story in published list or pending preview list
  const story = stories.find(s => s.id === id) || pendingStories.find(s => s.id === id)

  if (!story) {
    return (
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Story Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>The story you are trying to view does not exist or has been removed.</p>
        <Link to="/stories" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>
          Back to Stories
        </Link>
      </div>
    )
  }

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      {/* Back button */}
      <Link to="/stories" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        marginBottom: '2rem'
      }}>
        <ArrowLeft size={16} /> Back to Placement Stories
      </Link>

      {/* Profile Header */}
      <ProfileHeader 
        profile={story} 
        resumeLink={`/resume/${story.id}`} 
      />

      {/* Layout Grid: Story Cards on Left, sidebar tools on Right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        gap: '2rem'
      }} className="grid-2">
        
        {/* Story Prompts Timeline */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
            The Placement Journey
          </h2>

          <JourneySection index="01" prompt="First Year Journey: Where did I start?">
            {story.journey.firstYear}
          </JourneySection>

          <JourneySection index="02" prompt="Second Year Journey: What changed during my second year?">
            {story.journey.secondYear}
          </JourneySection>

          <JourneySection index="03" prompt="Third Year Journey: Designing the strategy">
            {story.journey.thirdYear}
          </JourneySection>

          <JourneySection index="04" prompt="Fourth Year Journey: The selection experience">
            {story.journey.fourthYear}
          </JourneySection>

          <JourneySection index="05" prompt="Preparation Strategy: How I structured my study patterns">
            {story.strategy.preparation}
          </JourneySection>

          <JourneySection index="06" prompt="Interview Experience: What did the rounds test?">
            {story.strategy.interview}
          </JourneySection>

          <JourneySection index="07" prompt="Securing the Placement: What tipped the scale?">
            {story.strategy.howISecured}
          </JourneySection>

          <JourneySection index="08" prompt="Advice to Juniors: What I would tell myself if I were you">
            {story.strategy.advice}
          </JourneySection>
        </div>

        {/* Sidebar details */}
        <div>
          {/* Quick links card */}
          <div className="editorial-card" style={{ marginBottom: '1.5rem', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Resources Shared</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Resume button */}
              <Link 
                to={`/resume/${story.id}`} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  fontSize: '0.85rem'
                }}
              >
                <FileText size={18} style={{ color: 'var(--success)' }} />
                <div>
                  <span style={{ fontWeight: 600, display: 'block' }}>Resume Sheet</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>PDF Document</span>
                </div>
              </Link>

              {/* Study Materials Shared */}
              {story.studyMaterials && story.studyMaterials.length > 0 ? (
                <div>
                  <span className="label-caps" style={{ fontSize: '0.65rem', display: 'block', marginBottom: '0.5rem' }}>Study Guides</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {story.studyMaterials.map((mat, idx) => (
                      <a 
                        key={idx} 
                        href={mat.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.25rem 0'
                        }}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px' }}>
                          {mat.title}
                        </span>
                        <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>No additional links shared.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StoryDetail
