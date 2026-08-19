import React from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import BranchCard from '../components/BranchCard.jsx'
import { branchesList } from '../mockData.js'

function Branches() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <SectionHeader 
        label="Engineering Departments"
        title="Academic Branches" 
        subtitle="Explore placement stories and interview advice specific to your department or related categories."
      />
      
      <div className="grid-3">
        {branchesList.map(branch => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>

      <div className="editorial-card" style={{
        marginTop: '3rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.01)'
      }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Looking for cross-department insights?</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          For computing roles, AI/DS has been grouped together with CSE as related branches. You can also view stories from other fields to learn how companies evaluate core software developer skills.
        </p>
      </div>
    </div>
  )
}

export default Branches
