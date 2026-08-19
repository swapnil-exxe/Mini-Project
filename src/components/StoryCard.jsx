import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Calendar, GraduationCap, Award, ChevronRight } from 'lucide-react'

function StoryCard({ story }) {
  return (
    <div className="editorial-card" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      minHeight: '260px'
    }}>
      <div>
        {/* Header: Company & Job Role */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1rem'
        }}>
          <div>
            <span className="label-caps" style={{ color: 'var(--success)', fontWeight: 'bold' }}>{story.company}</span>
            <h3 style={{ fontSize: '1.2rem', marginTop: '0.25rem', fontWeight: 600 }}>{story.jobRole}</h3>
          </div>
          {story.cgpa && (
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-color)',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-display)'
            }}>
              CGPA {story.cgpa.toFixed(1)}
            </div>
          )}
        </div>

        {/* Student metadata */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <GraduationCap size={15} style={{ color: 'var(--text-muted)' }} />
            <span>{story.studentName} &bull; <strong style={{ color: 'var(--text-primary)' }}>{story.branch}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={15} style={{ color: 'var(--text-muted)' }} />
            <span>Batch {story.batch} (Class of {story.passoutYear})</span>
          </div>
        </div>
      </div>

      {/* Action button */}
      <Link to={`/stories/${story.id}`} className="btn btn-secondary" style={{
        width: '100%',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        padding: '0.6rem 1rem'
      }}>
        View Journey
        <ChevronRight size={16} />
      </Link>
    </div>
  )
}

export default StoryCard
