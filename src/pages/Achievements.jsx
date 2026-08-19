import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import AchievementCard from '../components/AchievementCard.jsx'
import { Trophy, Award, Code, Users, Star } from 'lucide-react'

function Achievements({ achievements }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Hackathons', 'Coding Competitions', 'Placements', 'Internships', 'Technical Achievements']

  const filteredAchievements = activeCategory === 'All'
    ? achievements
    : achievements.filter(ach => ach.category === activeCategory)

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <SectionHeader 
        label="Student Honors"
        title="Student Achievements" 
        subtitle="Highlighting outstanding milestones, competitive coding triumphs, and internship results."
      />

      {/* Category selector pills */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '2.5rem',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '1.25rem'
      }}>
        {categories.map(cat => {
          const isActive = cat === activeCategory
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="btn"
              style={{
                backgroundColor: isActive ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.02)',
                color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: isActive ? 'var(--accent-color)' : 'var(--border-color)',
                padding: '0.4rem 1rem',
                fontSize: '0.8rem',
                borderRadius: '20px'
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Achievements output grid */}
      {filteredAchievements.length > 0 ? (
        <div className="grid-2">
          {filteredAchievements.map(ach => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>
      ) : (
        <div className="editorial-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <Star size={32} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }} />
          <p style={{ color: 'var(--text-secondary)' }}>No milestones logged under this category yet.</p>
        </div>
      )}
    </div>
  )
}

export default Achievements
