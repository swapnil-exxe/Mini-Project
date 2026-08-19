import React from 'react'

function SectionHeader({ title, subtitle, style, label }) {
  return (
    <div style={{ marginBottom: '2.5rem', ...style }}>
      {label && (
        <span className="label-caps" style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
          {label}
        </span>
      )}
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        color: '#ffffff',
        lineHeight: 1.2
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          marginTop: '0.5rem',
          maxWidth: '700px',
          lineHeight: '1.5'
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
