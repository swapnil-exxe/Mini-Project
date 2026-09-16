import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FileText, Bookmark, ExternalLink, GraduationCap, Briefcase, Award, CheckCircle2, HelpCircle, Code, Cpu, Target, UserCheck } from 'lucide-react'
import ProfileHeader from '../components/ProfileHeader.jsx'
import JourneySection from '../components/JourneySection.jsx'

function StoryDetail({ stories, pendingStories }) {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('journey') // 'journey' | 'strategy' | 'interview' | 'advice'

  // Find story in published list or pending preview list
  const story = stories.find(s => s.id === id) || pendingStories?.find(s => s.id === id)

  if (!story) {
    return (
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Story Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>The placement story you are trying to view does not exist or has been removed.</p>
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

      {/* SECTION A: Profile Header */}
      <ProfileHeader 
        profile={story} 
        resumeLink={`/resume/${story.id}`} 
      />

      {/* Navigation Tabs for Story Content */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        borderBottom: '1px solid var(--border-color)',
        marginBottom: '2rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}>
        <button
          onClick={() => setActiveTab('journey')}
          style={{
            padding: '0.6rem 1.25rem',
            borderRadius: '6px',
            border: 'none',
            background: activeTab === 'journey' ? 'rgba(255,255,255,0.08)' : 'transparent',
            color: activeTab === 'journey' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'journey' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap'
          }}
        >
          1. 4-Year Journey
        </button>
        <button
          onClick={() => setActiveTab('strategy')}
          style={{
            padding: '0.6rem 1.25rem',
            borderRadius: '6px',
            border: 'none',
            background: activeTab === 'strategy' ? 'rgba(255,255,255,0.08)' : 'transparent',
            color: activeTab === 'strategy' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'strategy' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap'
          }}
        >
          2. Preparation Strategy
        </button>
        <button
          onClick={() => setActiveTab('interview')}
          style={{
            padding: '0.6rem 1.25rem',
            borderRadius: '6px',
            border: 'none',
            background: activeTab === 'interview' ? 'rgba(255,255,255,0.08)' : 'transparent',
            color: activeTab === 'interview' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'interview' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap'
          }}
        >
          3. Interview Experience
        </button>
        <button
          onClick={() => setActiveTab('advice')}
          style={{
            padding: '0.6rem 1.25rem',
            borderRadius: '6px',
            border: 'none',
            background: activeTab === 'advice' ? 'rgba(255,255,255,0.08)' : 'transparent',
            color: activeTab === 'advice' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'advice' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap'
          }}
        >
          4. Advice to Juniors
        </button>
      </div>

      {/* Main Grid: Content on Left, Sidebar on Right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        gap: '2rem'
      }} className="grid-2">
        
        {/* Left Panel: Content Sections */}
        <div>

          {/* TAB 1: 4-Year Journey */}
          {activeTab === 'journey' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
                Four-Year Engineering Journey
              </h2>

              <JourneySection index="01" prompt="First Year Journey: Where did I start?">
                {story.journey?.firstYear || "Explored core programming languages, adapted to college life, and participated in local hackathons."}
              </JourneySection>

              <JourneySection index="02" prompt="Second Year Journey: Transitioning into core CS & DSA">
                {story.journey?.secondYear || "Dove deep into Data Structures, Object Oriented Programming, and built mini web/software projects."}
              </JourneySection>

              <JourneySection index="03" prompt="Third Year Journey: Hackathons, Internships & System Design">
                {story.journey?.thirdYear || "Focused on competitive programming, industry internships, and system design fundamentals."}
              </JourneySection>

              <JourneySection index="04" prompt="Fourth Year Journey: Campus Placement Selection Drive">
                {story.journey?.fourthYear || "Appeared for campus selection drives, cleared online assessments, technical interviews, and secured placement."}
              </JourneySection>
            </div>
          )}

          {/* TAB 2: Preparation Strategy */}
          {activeTab === 'strategy' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
                Preparation Strategy Breakdown
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="editorial-card">
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Code size={18} /> A. DSA Preparation
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {story.strategy?.dsa || story.strategy?.preparation || "Focused on Striver SDE Sheet, LeetCode Mediums, Trees, Graphs, and Dynamic Programming."}
                  </p>
                </div>

                <div className="editorial-card">
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Cpu size={18} /> B. Core CS Subjects (DBMS, OS, CN)
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {story.strategy?.coreCs || "Revised OS process synchronization, DBMS indexing/SQL joins, and TCP/IP protocol handshakes."}
                  </p>
                </div>

                <div className="editorial-card">
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={18} /> C. Projects & Portfolio
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {story.strategy?.projects || "Built a full-stack real-time collaboration web app showcasing REST APIs, database queries, and modular frontend components."}
                  </p>
                </div>

                <div className="editorial-card">
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Briefcase size={18} /> D. Internship Preparation
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {story.strategy?.internship || "Completed a 2-month summer internship that provided real code repo experience and agile teamwork exposure."}
                  </p>
                </div>

                <div className="editorial-card">
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Target size={18} /> E. Aptitude & Logical Reasoning
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {story.strategy?.aptitude || "Practiced speed math, logical puzzles, and timing strategies on online test platforms."}
                  </p>
                </div>

                <div className="editorial-card">
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <UserCheck size={18} /> F. Interview & Mock Sessions
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {story.strategy?.interview || story.strategy?.howISecured || "Simulated peer mock interviews to articulate code logic clearly before typing."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Interview Experience */}
          {activeTab === 'interview' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
                Detailed Interview Experience
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="prompt-card">
                  <div className="prompt-question">Round 1: Online Assessment (OA)</div>
                  <p className="prompt-answer" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                    {story.interviewRounds?.onlineAssessment || "Timed coding assessment consisting of 3 algorithm problems focusing on Arrays, Dynamic Programming, and SQL queries."}
                  </p>
                </div>

                <div className="prompt-card">
                  <div className="prompt-question">Round 2 & 3: Technical Interviews</div>
                  <p className="prompt-answer" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                    {story.interviewRounds?.technicalRounds || story.strategy?.interview || "Detailed live coding on trees, graph traversals, system architecture, and OS memory concepts."}
                  </p>
                </div>

                <div className="prompt-card">
                  <div className="prompt-question">Round 4: HR & Behavioral Round</div>
                  <p className="prompt-answer" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                    {story.interviewRounds?.hrRound || "Discussion on past team conflicts, leadership in technical clubs, ethics, and career alignment."}
                  </p>
                </div>

                {story.interviewRounds?.keyTopics && (
                  <div className="editorial-card" style={{ borderLeft: '4px solid var(--success)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Key Interview Topics & Questions</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {story.interviewRounds.keyTopics}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: Advice to Juniors */}
          {activeTab === 'advice' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
                Personal Advice to Juniors
              </h2>

              <div className="prompt-card" style={{ background: 'linear-gradient(135deg, rgba(22, 22, 24, 0.9) 0%, rgba(16, 185, 129, 0.05) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <div className="prompt-question" style={{ color: 'var(--success)' }}>Senior's Personal Takeaway</div>
                <p className="prompt-answer" style={{ fontSize: '1.2rem', color: '#ffffff', lineHeight: 1.7 }}>
                  "{story.strategy?.advice || "Do not neglect core CS concepts like Operating Systems and DBMS. Build real projects, practice dry-running algorithms on paper, and stay consistent throughout your 4 years."}"
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Right Panel: Resume Preview & Shared Materials Sidebar */}
        <div>
          <div className="editorial-card" style={{ position: 'sticky', top: '90px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Senior Artifacts</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* SECTION E: Resume Preview & Download Link */}
              <Link 
                to={`/resume/${story.id}`} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  fontSize: '0.85rem'
                }}
              >
                <FileText size={20} style={{ color: 'var(--success)', flexShrink: 0 }} />
                <div>
                  <span style={{ fontWeight: 600, display: 'block', color: '#ffffff' }}>Verified Resume</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>View & Download PDF Sheet</span>
                </div>
              </Link>

              {/* Study Materials Shared */}
              <div>
                <span className="label-caps" style={{ fontSize: '0.65rem', display: 'block', marginBottom: '0.5rem' }}>Study Guides Shared</span>
                {story.studyMaterials && story.studyMaterials.length > 0 ? (
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
                          padding: '0.35rem 0',
                          borderBottom: '1px solid rgba(255,255,255,0.04)'
                        }}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px' }}>
                          {mat.title}
                        </span>
                        <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>No additional external links attached.</p>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StoryDetail
