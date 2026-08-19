import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Compass, ShieldAlert, Award, FileText, CheckCircle2, ChevronRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import StoryCard from '../components/StoryCard.jsx'
import BranchCard from '../components/BranchCard.jsx'
import AchievementCard from '../components/AchievementCard.jsx'
import { branchesList } from '../mockData.js'

function Landing({ stories, achievements }) {
  // Grab a couple of stories for featured placement section
  const featuredStories = stories.slice(0, 3)
  // Grab a couple of achievements
  const featuredAchievements = achievements.slice(0, 2)

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{
        padding: '6rem 0 4rem 0',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(13,13,14,0) 100%)',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="label-caps" style={{ 
            color: 'var(--success)', 
            marginBottom: '1rem',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            padding: '4px 12px',
            borderRadius: '20px',
            background: 'rgba(16, 185, 129, 0.05)'
          }}>College Placement Portal</span>
          
          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: 800,
            lineHeight: '1.1',
            letterSpacing: '-0.04em',
            marginBottom: '1rem',
            fontFamily: 'var(--font-display)'
          }}>
            LOOP
          </h1>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 400,
            color: '#ffffff',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Launchpad of Outstanding Placements
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            marginBottom: '2.5rem',
            lineHeight: '1.6'
          }}>
            Learn from the real journeys of seniors who have already cracked interviews and secured placements at top companies.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/stories" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Explore Placement Stories
              <ArrowRight size={18} />
            </Link>
            <Link to="/resources" className="btn btn-secondary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Why LOOP? Section */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <SectionHeader 
            label="Benefits"
            title="Why LOOP?" 
            subtitle="Bridging the gap between seniors, alumni, and juniors through organized peer mentorship."
          />
          <div className="grid-3">
            <div className="editorial-card">
              <div style={{ color: 'var(--success)', marginBottom: '1rem' }}><CheckCircle2 size={32} /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Centralized Intelligence</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                No more digging through fragmented chats. Access all interview logs, question sets, and timelines in one location.
              </p>
            </div>
            <div className="editorial-card">
              <div style={{ color: 'var(--success)', marginBottom: '1rem' }}><CheckCircle2 size={32} /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Prompt-Based Chronologies</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Read how seniors adjusted their study schedules each academic year, from first-year basics to fourth-year selection drives.
              </p>
            </div>
            <div className="editorial-card">
              <div style={{ color: 'var(--success)', marginBottom: '1rem' }}><CheckCircle2 size={32} /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Verified Resumes</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Examine actual resumes that successfully cleared initial HR checks, providing practical layout templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Stories Section */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            gap: '1rem'
          }}>
            <SectionHeader 
              label="Selected Journeys"
              title="Featured Placement Stories" 
              subtitle="Read step-by-step interview experiences of senior students."
              style={{ marginBottom: 0 }}
            />
            <Link to="/stories" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: 500
            }}>
              View All Stories <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {featuredStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Branches Section */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <SectionHeader 
            label="Academic Streams"
            title="Browse by Branch" 
            subtitle="Explore stories tailored to your specific engineering department."
          />
          <div className="grid-3">
            {branchesList.map(branch => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Achievements Section */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            gap: '1rem'
          }}>
            <SectionHeader 
              label="Student Milestones"
              title="Recent Achievements" 
              subtitle="Celebrating hackathon victories and internship selections within our college community."
              style={{ marginBottom: 0 }}
            />
            <Link to="/achievements" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: 500
            }}>
              View All Achievements <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid-2">
            {featuredAchievements.map(ach => (
              <AchievementCard key={ach.id} achievement={ach} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container" style={{
          background: 'var(--surface-color)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '4rem 2rem',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Are you a Placed Senior or Alumni?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
            Help the next batch succeed. Share your journey, interview tips, study checklists, and resume template.
          </p>
          <Link to="/submit-story" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
            Submit Your Story
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Landing
