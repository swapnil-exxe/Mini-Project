import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'

function BranchCard({ branch }) {
  return (
    <div className="editorial-card" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      minHeight: '220px'
    }}>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{branch.name}</h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'var(--text-secondary)',
            fontSize: '0.8rem'
          }}>
            <BookOpen size={14} />
            <span>{branch.storyCount} stories</span>
          </div>
        </div>

        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          {branch.description}
        </p>
      </div>

      <Link 
        to={`/stories?branch=${encodeURIComponent(branch.name)}`} 
        className="btn btn-primary" 
        style={{
          width: '100%',
          justifyContent: 'space-between',
          padding: '0.7rem 1.2rem',
          fontSize: '0.85rem'
        }}
      >
        Explore Branch Stories
        <ArrowRight size={16} />
      </Link>
    </div>
  )
}

export default BranchCard
