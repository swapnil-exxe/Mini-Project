import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Calendar, GraduationCap, Award, ChevronRight, CheckCircle2 } from 'lucide-react'

function StoryCard({ story }) {
  return (
    <div className="editorial-card" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      minHeight: '270px',
      position: 'relative'
    }}>
      <div>
        {/* Top Badges: Company & CGPA */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '0.85rem'
        }}>
          <div>
            <span className="label-caps" style={{ 
              color: 'var(--success)', 
              fontWeight: 700, 
              fontSize: '0.75rem',
              letterSpacing: '0.1em' 
            }}>
              {story.company}
            </span>
            <h3 style={{ fontSize: '1.25rem', marginTop: '0.2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {story.jobRole}
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
            {story.cgpa && (
              <span style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: 'var(--success)',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-display)'
              }}>
                CGPA {story.cgpa.toFixed(1)}
              </span>
            )}
            <span style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '0.7rem'
            }}>
              {story.passoutYear} Batch
            </span>
          </div>
        </div>

        {/* Student metadata */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          marginBottom: '1.25rem',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <GraduationCap size={15} style={{ color: 'var(--text-muted)' }} />
            <span>Senior: <strong style={{ color: '#ffffff' }}>{story.studentName}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Briefcase size={15} style={{ color: 'var(--text-muted)' }} />
            <span>Branch: <strong style={{ color: 'var(--text-primary)' }}>{story.branch}</strong></span>
          </div>
        </div>

        {/* Teaser snippet */}
        {story.journey?.firstYear && (
          <p style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            lineHeight: 1.4,
            marginBottom: '1.25rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            "{story.journey.firstYear}"
          </p>
        )}
      </div>

      {/* Action button */}
      <Link to={`/stories/${story.id}`} className="btn btn-secondary" style={{
        width: '100%',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        padding: '0.65rem 1rem'
      }}>
        <span>View Full Story</span>
        <ChevronRight size={16} />
      </Link>
    </div>
  )
}

export default StoryCard
