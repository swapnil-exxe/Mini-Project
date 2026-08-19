import React from 'react'

function JourneySection({ index, prompt, children }) {
  if (!children) return null

  return (
    <div className="prompt-card">
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.75rem',
        marginBottom: '0.75rem',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '0.75rem'
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--success)',
          letterSpacing: '0.1em'
        }}>
          {index}
        </span>
        <h3 className="prompt-question">{prompt}</h3>
      </div>
      <div className="prompt-answer">
        {children}
      </div>
    </div>
  )
}

export default JourneySection
