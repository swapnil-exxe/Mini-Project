import React from 'react'
import { Link } from 'react-router-dom'
import { Check, X, Eye, ShieldAlert, Award, FileText, Users, Bookmark } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import StatCard from '../components/StatCard.jsx'

function AdminDashboard({
  pendingStories,
  pendingResources,
  onApproveStory,
  onRejectStory,
  onApproveResource,
  onRejectResource,
  storiesCount
}) {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <SectionHeader 
        label="Moderation Center"
        title="Admin Dashboard" 
        subtitle="Manage pending student contributions, resource folders, and verify academic records before publishing."
      />

      {/* Analytics Counter Cards */}
      <div className="grid-4" style={{ marginBottom: '3rem' }}>
        <StatCard 
          label="Pending Stories" 
          value={pendingStories.length} 
          icon={<ShieldAlert size={20} style={{ color: 'var(--warning)' }} />}
          description="Awaiting review"
          style={{ borderLeft: '4px solid var(--warning)' }}
        />
        <StatCard 
          label="Pending Resources" 
          value={pendingResources.length} 
          icon={<Bookmark size={20} />} 
          description="Study material reviews"
        />
        <StatCard 
          label="Published Stories" 
          value={storiesCount} 
          icon={<Check size={20} style={{ color: 'var(--success)' }} />}
          description="Active on student portal"
        />
        <StatCard 
          label="Registered Users" 
          value={14} 
          icon={<Users size={20} />} 
          description="Total student accounts"
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2.5rem'
      }} className="grid-2">

        {/* Left Column: Pending Stories moderation queue */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            Pending Story Submissions ({pendingStories.length})
          </h2>

          {pendingStories.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pendingStories.map(story => (
                <div key={story.id} className="editorial-card" style={{
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div>
                    <span className="label-caps" style={{ color: 'var(--success)', fontSize: '0.65rem' }}>
                      {story.branch} &bull; Batch {story.batch || '2022-2026'}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginTop: '0.25rem' }}>
                      {story.studentName} &bull; <span style={{ color: '#ffffff' }}>{story.company}</span>
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Role: {story.jobRole} &bull; Submission Date: {story.submissionDate || "Today"}
                    </p>
                  </div>

                  {/* Actions Group */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link to={`/stories/${story.id}`} className="btn btn-secondary" style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', gap: '0.3rem' }}>
                      <Eye size={14} /> View
                    </Link>
                    <button 
                      onClick={() => onApproveStory(story.id)} 
                      className="btn btn-secondary" 
                      style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', gap: '0.3rem', borderColor: 'var(--success)', color: 'var(--success)' }}
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
            <div className="editorial-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <p style={{ color: 'var(--text-muted)' }}>There are no stories currently waiting for review.</p>
            </div>
          )}
        </div>

        {/* Right Column: Pending Resources moderation queue */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            Pending Resources ({pendingResources.length})
          </h2>

          {pendingResources.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pendingResources.map(res => (
                <div key={res.id} className="editorial-card" style={{ padding: '1.25rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <span className="label-caps" style={{ fontSize: '0.65rem' }}>
                      Folder: {res.folder} &bull; {res.type}
                    </span>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.25rem' }}>{res.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{res.description}</p>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.5rem' }}>
                      By: {res.submittedBy}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
                    <button 
                      onClick={() => onApproveResource(res.id)} 
                      className="btn btn-secondary" 
                      style={{ flexGrow: 1, padding: '0.4rem', fontSize: '0.75rem', borderColor: 'var(--success)', color: 'var(--success)' }}
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => onRejectResource(res.id)} 
                      className="btn btn-danger" 
                      style={{ flexGrow: 1, padding: '0.4rem', fontSize: '0.75rem' }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="editorial-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <p style={{ color: 'var(--text-muted)' }}>No resources waiting for review.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard
