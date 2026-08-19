import React from 'react'
import { Calendar, Award, Users } from 'lucide-react'

function AchievementCard({ achievement }) {
  return (
    <div className="editorial-card" style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      padding: 0
    }}>
      {/* Header Image if available */}
      {achievement.imageUrl && (
        <div style={{
          height: '180px',
          width: '100%',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border-color)',
          position: 'relative'
        }}>
          <img 
            src={achievement.imageUrl} 
            alt={achievement.title} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} 
          />
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            backgroundColor: 'rgba(13, 13, 14, 0.85)',
            border: '1px solid var(--border-color)',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: 600
          }}>
            {achievement.category}
          </div>
        </div>
      )}

      {/* Content details */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>{achievement.title}</h3>
        
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.85rem', 
          marginBottom: '1.25rem',
          flexGrow: 1 
        }}>
          {achievement.description}
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Users size={14} />
            <span style={{ maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {achievement.studentTeam}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={14} />
            <span>{achievement.year}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementCard
