import React from 'react'

function StatCard({ label, value, icon, description, style }) {
  return (
    <div className="editorial-card" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '130px',
      ...style
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="label-caps" style={{ color: 'var(--text-secondary)' }}>
          {label}
        </span>
        {icon && (
          <div style={{ color: 'var(--text-muted)' }}>
            {icon}
          </div>
        )}
      </div>
      <div>
        <div style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          fontFamily: 'var(--font-display)',
          lineHeight: 1.1,
          margin: '0.25rem 0'
        }}>
          {value}
        </div>
        {description && (
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginTop: '0.25rem'
          }}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default StatCard
