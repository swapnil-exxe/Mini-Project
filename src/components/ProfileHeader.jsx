import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Briefcase, Calendar, FileText, User } from 'lucide-react'

function ProfileHeader({ profile, isOwnProfile = false, resumeLink = null }) {
  // Generate user initials for placeholder image
  const getInitials = (name) => {
    if (!name) return 'U'
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="editorial-card" style={{
      padding: '2.5rem',
      marginBottom: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      flexWrap: 'wrap'
    }}>
      {/* Profile Initials Avatar */}
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        color: '#ffffff'
      }}>
        {getInitials(profile.studentName || profile.name)}
      </div>

      {/* Profile Info Details */}
      <div style={{ flexGrow: 1, minWidth: '250px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, lineHeight: 1.2 }}>
            {profile.studentName || profile.name}
          </h1>
          {isOwnProfile && (
            <span style={{
              fontSize: '0.7rem',
              backgroundColor: 'rgba(255,255,255,0.08)',
              padding: '2px 8px',
              borderRadius: '4px',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>My Profile</span>
          )}
        </div>

        {/* Company & Role */}
        {(profile.company || profile.jobRole) && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            margin: '0.5rem 0',
            fontSize: '1.1rem',
            color: 'var(--success)',
            fontWeight: 500
          }}>
            <Briefcase size={16} />
            <span>{profile.jobRole || "Contributor"} at {profile.company || "TPO"}</span>
          </div>
        )}

        {/* Academic Details */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginTop: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <GraduationCap size={16} />
            <span>{profile.branch}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={16} />
            <span>Batch {profile.batch || '2023-2027'} (Class of {profile.passoutYear})</span>
          </div>
          {profile.cgpa && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontWeight: 600, color: '#ffffff' }}>CGPA:</span>
              <span>{profile.cgpa.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action links (e.g. View Resume) */}
      {resumeLink && (
        <Link 
          to={resumeLink} 
          className="btn btn-primary"
          style={{
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            height: '42px'
          }}
        >
          <FileText size={16} />
          View Resume
        </Link>
      )}
    </div>
  )
}

export default ProfileHeader
