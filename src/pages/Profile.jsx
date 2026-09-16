import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, ShieldAlert, Award, Compass, Edit3, CheckCircle2, Clock, XCircle, Sparkles } from 'lucide-react'
import ProfileHeader from '../components/ProfileHeader.jsx'
import StoryCard from '../components/StoryCard.jsx'

function Profile({ currentUser, stories = [], pendingStories = [] }) {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: currentUser?.name || "Swapnil Patel",
    email: currentUser?.email || "swapnil@college.edu",
    branch: currentUser?.branch || "CSE / AI-DS",
    currentYear: currentUser?.currentYear || 3,
    cgpa: currentUser?.cgpa || 9.2,
    placementStatus: currentUser?.role === 'contributor' ? 'Placed at Microsoft' : 'Preparing for Placements'
  })

  // Find stories matching current user name
  const myLiveStories = stories.filter(s => s.studentName === userInfo.name)
  const myPendingStories = pendingStories.filter(s => s.studentName === userInfo.name)

  const handleSaveProfile = (e) => {
    e.preventDefault()
    setIsEditing(false)
    alert("Profile info saved successfully!")
  }

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      
      {/* Profile Header Block */}
      <ProfileHeader profile={{ ...currentUser, ...userInfo }} isOwnProfile={true} />

      {/* Profile Sections Layout Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '2.5rem'
      }} className="grid-2">

        {/* Sidebar Info & Controls */}
        <div>
          <div className="editorial-card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Profile Controls</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button onClick={() => setIsEditing(!isEditing)} className="btn btn-secondary" style={{ width: '100%', gap: '0.4rem', justifyContent: 'center' }}>
                <Edit3 size={15} /> {isEditing ? "Cancel Edit" : "Edit Personal Info"}
              </button>
              
              <Link to="/submit-story" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', gap: '0.4rem' }}>
                <Sparkles size={15} /> Write Placement Story
              </Link>
            </div>
          </div>

          <div className="editorial-card">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>Contribution Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Published Stories:</span>
                <strong style={{ color: 'var(--success)' }}>{myLiveStories.length}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Pending Moderation:</span>
                <strong style={{ color: 'var(--warning)' }}>{myPendingStories.length}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Academic Status:</span>
                <strong style={{ color: '#ffffff' }}>Year {userInfo.currentYear} Student</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Placement Status:</span>
                <strong style={{ color: 'var(--text-primary)' }}>{userInfo.placementStatus}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area: Edit form or My Stories */}
        <div>
          {isEditing ? (
            <div className="editorial-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>Edit Personal & Academic Details</h3>
              <form onSubmit={handleSaveProfile}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    value={userInfo.name} 
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    className="form-control" 
                    required 
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Branch</label>
                    <select 
                      value={userInfo.branch} 
                      onChange={(e) => setUserInfo({ ...userInfo, branch: e.target.value })}
                      className="form-control"
                    >
                      <option value="CSE / AI-DS">CSE / AI-DS</option>
                      <option value="CE">CE</option>
                      <option value="EXTC">EXTC</option>
                      <option value="IT">IT</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Current Academic Year</label>
                    <input 
                      type="number" 
                      value={userInfo.currentYear} 
                      onChange={(e) => setUserInfo({ ...userInfo, currentYear: parseInt(e.target.value) })}
                      className="form-control" 
                      min="1" max="4"
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Current CGPA</label>
                    <input 
                      type="number" 
                      step="0.01"
                      value={userInfo.cgpa} 
                      onChange={(e) => setUserInfo({ ...userInfo, cgpa: parseFloat(e.target.value) })}
                      className="form-control" 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Placement Status</label>
                    <input 
                      type="text" 
                      value={userInfo.placementStatus} 
                      onChange={(e) => setUserInfo({ ...userInfo, placementStatus: e.target.value })}
                      className="form-control" 
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Save Profile Changes
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>My Placement Journeys</h2>

              {/* Pending Stories section */}
              {myPendingStories.length > 0 && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{
                    fontSize: '1rem',
                    color: 'var(--warning)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    <Clock size={16} /> Pending Moderation ({myPendingStories.length})
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {myPendingStories.map(story => (
                      <div key={story.id} className="editorial-card" style={{
                        borderLeft: '4px solid var(--warning)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.25rem'
                      }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                            <span style={{
                              background: 'rgba(245, 158, 11, 0.15)',
                              color: 'var(--warning)',
                              fontSize: '0.65rem',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontWeight: 600
                            }}>
                              Status: Pending Review
                            </span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{story.submissionDate || "Today"}</span>
                          </div>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{story.company} &bull; {story.jobRole}</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Branch: {story.branch} &bull; CGPA: {story.cgpa || 'N/A'}</p>
                        </div>
                        <Link to={`/stories/${story.id}`} className="btn btn-secondary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}>
                          Preview Story
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Stories section */}
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#ffffff' }}>
                  Published Stories ({myLiveStories.length})
                </h3>
                {myLiveStories.length > 0 ? (
                  <div className="grid-2">
                    {myLiveStories.map(story => (
                      <StoryCard key={story.id} story={story} />
                    ))}
                  </div>
                ) : (
                  <div className="editorial-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      You haven't published any placement stories yet.
                    </p>
                    {myPendingStories.length === 0 && (
                      <Link to="/submit-story" className="btn btn-secondary" style={{ marginTop: '1.25rem', fontSize: '0.85rem' }}>
                        Share Your Placement Story
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Profile
