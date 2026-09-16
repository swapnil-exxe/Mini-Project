import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, X, Eye, ShieldAlert, Award, FileText, Users, Bookmark, Edit, CheckCircle2, AlertCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import StatCard from '../components/StatCard.jsx'
import { registeredUsersList } from '../mockData.js'

function AdminDashboard({
  pendingStories = [],
  pendingResources = [],
  onApproveStory,
  onRejectStory,
  onApproveResource,
  onRejectResource,
  storiesCount = 0
}) {
  const [activeTab, setActiveTab] = useState('stories') // 'stories' | 'resources' | 'users'
  const [editingStory, setEditingStory] = useState(null)
  const [usersList, setUsersList] = useState(registeredUsersList)

  // Edit story handler
  const handleSaveEdit = (e) => {
    e.preventDefault()
    setEditingStory(null)
    alert("Story details updated successfully!")
  }

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <SectionHeader 
        label="Moderation Center"
        title="Administrator Dashboard" 
        subtitle="Review and approve pending student contributions, moderate study resources, and manage student user accounts."
      />

      {/* Overview Analytics Cards */}
      <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
        <StatCard 
          label="Pending Stories" 
          value={pendingStories.length} 
          icon={<ShieldAlert size={20} style={{ color: 'var(--warning)' }} />}
          description="Awaiting moderation"
          style={{ borderLeft: '4px solid var(--warning)' }}
        />
        <StatCard 
          label="Pending Resources" 
          value={pendingResources.length} 
          icon={<Bookmark size={20} style={{ color: '#60a5fa' }} />} 
          description="Material reviews"
        />
        <StatCard 
          label="Published Stories" 
          value={storiesCount} 
          icon={<Check size={20} style={{ color: 'var(--success)' }} />}
          description="Active on student portal"
        />
        <StatCard 
          label="Registered Users" 
          value={usersList.length} 
          icon={<Users size={20} />} 
          description="Students & Contributors"
        />
      </div>

      {/* Moderation Navigation Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        borderBottom: '1px solid var(--border-color)',
        marginBottom: '2rem'
      }}>
        <button
          onClick={() => setActiveTab('stories')}
          style={{
            padding: '0.75rem 1.25rem',
            background: activeTab === 'stories' ? 'rgba(255,255,255,0.08)' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'stories' ? '2px solid var(--success)' : '2px solid transparent',
            color: activeTab === 'stories' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'stories' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          Pending Placement Stories ({pendingStories.length})
        </button>

        <button
          onClick={() => setActiveTab('resources')}
          style={{
            padding: '0.75rem 1.25rem',
            background: activeTab === 'resources' ? 'rgba(255,255,255,0.08)' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'resources' ? '2px solid var(--success)' : '2px solid transparent',
            color: activeTab === 'resources' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'resources' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          Pending Resources ({pendingResources.length})
        </button>

        <button
          onClick={() => setActiveTab('users')}
          style={{
            padding: '0.75rem 1.25rem',
            background: activeTab === 'users' ? 'rgba(255,255,255,0.08)' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'users' ? '2px solid var(--success)' : '2px solid transparent',
            color: activeTab === 'users' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'users' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          User Management ({usersList.length})
        </button>
      </div>

      {/* TAB 1: Pending Stories Moderation */}
      {activeTab === 'stories' && (
        <div>
          {pendingStories.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {pendingStories.map(story => (
                <div key={story.id} className="editorial-card" style={{
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  borderLeft: '4px solid var(--warning)'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span className="label-caps" style={{ color: 'var(--warning)', fontSize: '0.65rem' }}>
                        Pending Review
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        &bull; {story.branch} &bull; Batch {story.batch || '2022-2026'}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                      {story.studentName} &bull; <span style={{ color: 'var(--success)' }}>{story.company}</span> ({story.jobRole})
                    </h3>
                    
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                      CGPA: <strong>{story.cgpa || 'N/A'}</strong> &bull; Submission Date: {story.submissionDate || "Today"}
                    </p>
                  </div>

                  {/* Actions Group */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Link 
                      to={`/stories/${story.id}`} 
                      className="btn btn-secondary" 
                      style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', gap: '0.3rem' }}
                    >
                      <Eye size={14} /> View Details
                    </Link>

                    <button 
                      onClick={() => setEditingStory(story)} 
                      className="btn btn-secondary" 
                      style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', gap: '0.3rem' }}
                    >
                      <Edit size={14} /> Edit
                    </button>

                    <button 
                      onClick={() => onApproveStory(story.id)} 
                      className="btn btn-secondary" 
                      style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', gap: '0.3rem', borderColor: 'var(--success)', color: 'var(--success)', background: 'rgba(16, 185, 129, 0.08)' }}
                    >
                      <Check size={14} /> Approve
                    </button>

                    <button 
                      onClick={() => onRejectStory(story.id)} 
                      className="btn btn-danger" 
                      style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', gap: '0.3rem' }}
                    >
                      <X size={14} /> Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="editorial-card" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
              <CheckCircle2 size={40} style={{ color: 'var(--success)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>All Placement Stories Moderated</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                There are no pending stories in the review queue.
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Pending Resources Moderation */}
      {activeTab === 'resources' && (
        <div>
          {pendingResources.length > 0 ? (
            <div className="grid-2">
              {pendingResources.map(res => (
                <div key={res.id} className="editorial-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span className="label-caps" style={{ fontSize: '0.65rem', color: 'var(--warning)' }}>
                        Pending Material Review
                      </span>
                      <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.04)', padding: '2px 6px', borderRadius: '4px' }}>
                        {res.type}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{res.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: '1.5' }}>
                      {res.description}
                    </p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.75rem' }}>
                      Folder: <strong>{res.folder}</strong> &bull; Submitted By: {res.submittedBy}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', width: '100%' }}>
                    <button 
                      onClick={() => onApproveResource(res.id)} 
                      className="btn btn-secondary" 
                      style={{ flexGrow: 1, padding: '0.5rem', fontSize: '0.8rem', borderColor: 'var(--success)', color: 'var(--success)', background: 'rgba(16, 185, 129, 0.08)' }}
                    >
                      <Check size={14} /> Approve Resource
                    </button>
                    <button 
                      onClick={() => onRejectResource(res.id)} 
                      className="btn btn-danger" 
                      style={{ flexGrow: 1, padding: '0.5rem', fontSize: '0.8rem' }}
                    >
                      <X size={14} /> Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="editorial-card" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
              <CheckCircle2 size={40} style={{ color: 'var(--success)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>All Resources Moderated</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                No pending study material resources waiting for review.
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: User Management */}
      {activeTab === 'users' && (
        <div className="editorial-card" style={{ padding: '1.5rem', overflowX: 'auto' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Registered User Accounts</h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '0.75rem' }}>Name</th>
                <th style={{ padding: '0.75rem' }}>Email</th>
                <th style={{ padding: '0.75rem' }}>Role</th>
                <th style={{ padding: '0.75rem' }}>Branch</th>
                <th style={{ padding: '0.75rem' }}>CGPA</th>
                <th style={{ padding: '0.75rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map(u => (
                <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '0.85rem 0.75rem', fontWeight: 600, color: '#ffffff' }}>{u.name}</td>
                  <td style={{ padding: '0.85rem 0.75rem', color: 'var(--text-secondary)' }}>{u.email}</td>
                  <td style={{ padding: '0.85rem 0.75rem' }}>
                    <span className={`role-pill role-${u.role}`}>{u.role}</span>
                  </td>
                  <td style={{ padding: '0.85rem 0.75rem', color: 'var(--text-secondary)' }}>{u.branch}</td>
                  <td style={{ padding: '0.85rem 0.75rem', color: 'var(--text-secondary)' }}>{u.cgpa}</td>
                  <td style={{ padding: '0.85rem 0.75rem' }}>
                    <span style={{
                      color: u.status === 'Active' ? 'var(--success)' : 'var(--warning)',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal (Inline Overlay) */}
      {editingStory && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1.5rem'
        }}>
          <div className="editorial-card" style={{ maxWidth: '550px', width: '100%', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Edit Story Details</h3>
            
            <form onSubmit={handleSaveEdit}>
              <div className="form-group">
                <label className="form-label">Student Name</label>
                <input 
                  type="text" 
                  value={editingStory.studentName} 
                  onChange={(e) => setEditingStory({ ...editingStory, studentName: e.target.value })}
                  className="form-control" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Company</label>
                <input 
                  type="text" 
                  value={editingStory.company} 
                  onChange={(e) => setEditingStory({ ...editingStory, company: e.target.value })}
                  className="form-control" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Role</label>
                <input 
                  type="text" 
                  value={editingStory.jobRole} 
                  onChange={(e) => setEditingStory({ ...editingStory, jobRole: e.target.value })}
                  className="form-control" 
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={() => setEditingStory(null)} className="btn btn-secondary" style={{ flexGrow: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flexGrow: 1 }}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default AdminDashboard
