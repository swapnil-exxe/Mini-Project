import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--surface-solid)',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '1rem' }}>LOOP</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '300px' }}>
              Launchpad of Outstanding Placements. A centralized placement knowledge sharing platform.
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Academic Context</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              College Mini Project Phase 1 Submission.<br />
              Centralized placement preparation planning, design documentation & frontend user flow prototype.
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Branches</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Link to="/stories?branch=CSE / AI-DS">CSE & AI/DS Stories</Link>
              <Link to="/stories?branch=CE">Computer Engineering</Link>
              <Link to="/stories?branch=EXTC">Electronics & Telecom</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Platform Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Link to="/stories">All Placement Journeys</Link>
              <Link to="/resources">Study Material Folders</Link>
              <Link to="/achievements">Achievements & Hackathons</Link>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <p>&copy; {new Date().getFullYear()} LOOP - College Mini Project. All rights reserved.</p>
          <p style={{ fontStyle: 'italic' }}>
            Disclaimer: All names, packages, and records displayed are for prototyping purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
