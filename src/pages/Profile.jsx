import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, ShieldAlert, Award, Compass, Edit3 } from 'lucide-react'
import ProfileHeader from '../components/ProfileHeader.jsx'
import StoryCard from '../components/StoryCard.jsx'

function Profile({ currentUser, stories, pendingStories }) {
  // Find stories matching current user name
  const myLiveStories = stories.filter(s => s.studentName === currentUser.name)
  const myPendingStories = pendingStories.filter(s => s.studentName === currentUser.name)

  const handleEditProfile = () => {
    alert("Simulating edit profile... In Phase 2, this will save changes to the MongoDB user record.")
  }

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      
      {/* Profile Header Block */}
      <ProfileHeader profile={currentUser} isOwnProfile={true} />

      {/* Profile Sections Layout Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '2.5rem'
      }} className="grid-2">

        {/* Sidebar Info & Controls */}
        <div>
          <div className="editorial-card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Profile Controls</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button onClick={handleEditProfile} className="btn btn-secondary" style={{ width: '100%', gap: '0.4rem', justifyContent: 'center' }}>
                <Edit3 size={15} /> Edit Personal Info
              </button>
              
              {currentUser.role === 'student' && (
                <Link to="/submit-story" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Write a Placement Story
                </Link>
              )}
            </div>
          </div>

          <div className="editorial-card">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>Stats Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Published Stories:</span>
                <strong style={{ color: '#ffffff' }}>{myLiveStories.length}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Pending Approvals:</span>
                <strong style={{ color: 'var(--warning)' }}>{myPendingStories.length}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Resource Contributions:</span>
                <strong style={{ color: '#ffffff' }}>0</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area: My Stories & My Contributions */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>My Placement Journeys</h2>

          {/* Pending Stories section */}
          {myPendingStories.length > 0 && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontSize: '1rem',
                color: 'var(--warning)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                <ShieldAlert size={16} /> Pending Moderation ({myPendingStories.length})
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {myPendingStories.map(story => (
                  <div key={story.id} className="editorial-card" style={{
                    borderLeft: '4px solid var(--warning)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.25rem'
                  }}>
                    <div>
                      <span className="label-caps" style={{ color: 'var(--warning)', fontSize: '0.65rem' }}>Staged Preview</span>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.25rem' }}>{story.company} &bull; {story.jobRole}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Submitted on: {story.submissionDate}</p>
                    </div>
                    <Link to={`/stories/${story.id}`} className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>
                      Preview Details
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live Stories section */}
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Live Stories ({myLiveStories.length})</h3>
            {myLiveStories.length > 0 ? (
              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {myLiveStories.map(story => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="editorial-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  You haven't published any placement stories yet.
                </p>
                {myPendingStories.length === 0 && (
                  <Link to="/submit-story" className="btn btn-secondary" style={{ marginTop: '1.25rem', fontSize: '0.8rem' }}>
                    Share Your Journey
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
