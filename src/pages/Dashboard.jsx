import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { BookOpen, FileText, Building2, Trophy, Search, ChevronRight, Compass } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import StatCard from '../components/StatCard.jsx'
import StoryCard from '../components/StoryCard.jsx'
import ResourceCard from '../components/ResourceCard.jsx'

function Dashboard({ currentUser, stories, resources, achievements }) {
  const [searchVal, setSearchVal] = useState('')
  const navigate = useNavigate()

  // Filter recommendations based on student's branch
  const recommendedStories = stories.filter(s => s.branch === currentUser.branch).slice(0, 2)
  const otherStories = stories.filter(s => s.branch !== currentUser.branch).slice(0, 1)
  const dashboardStories = [...recommendedStories, ...otherStories]

  // Flatten resources for display
  const latestResources = resources.flatMap(folder => 
    folder.items.map(item => ({ ...item, folderName: folder.folderName }))
  ).slice(0, 3)

  // Popular companies list
  const companiesList = ["Microsoft", "Google", "NVIDIA", "Cisco", "Zoho", "Morgan Stanley", "Amazon"]

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchVal.trim()) {
      navigate(`/stories?search=${encodeURIComponent(searchVal)}`)
    }
  }

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      {/* Welcome greeting */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '2.5rem'
      }}>
        <div>
          <span className="label-caps" style={{ color: 'var(--success)' }}>Student Workspace</span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800 }}>Welcome back, {currentUser.name}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Here is the latest placement preparation intelligence from your branch (<strong>{currentUser.branch}</strong>).
          </p>
        </div>

        {/* Quick Search */}
        <form onSubmit={handleSearchSubmit} style={{
          position: 'relative',
          maxWidth: '350px',
          width: '100%'
        }}>
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="form-control"
            placeholder="Quick search stories..."
            style={{ paddingLeft: '2.5rem', height: '40px' }}
          />
          <Search size={16} style={{
            position: 'absolute',
            top: '50%',
            left: '0.85rem',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)'
          }} />
        </form>
      </div>

      {/* Stats Counter Row */}
      <div className="grid-4" style={{ marginBottom: '3rem' }}>
        <StatCard 
          label="Placement Stories" 
          value={stories.length} 
          icon={<BookOpen size={20} />} 
          description="Verified senior experiences"
        />
        <StatCard 
          label="Study Resources" 
          value={latestResources.length + 5} 
          icon={<FileText size={20} />} 
          description="Preparation guides & folders"
        />
        <StatCard 
          label="Target Companies" 
          value={companiesList.length} 
          icon={<Building2 size={20} />} 
          description="Actively recruiting companies"
        />
        <StatCard 
          label="Achievements" 
          value={achievements.length} 
          icon={<Trophy size={20} />} 
          description="Hackathon & research logs"
        />
      </div>

      {/* Recommended placement stories */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Recommended for You</h2>
          <Link to="/stories" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'var(--text-secondary)',
            fontSize: '0.85rem'
          }}>
            Explore All Stories <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid-3">
          {dashboardStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>

      {/* Popular Companies & Latest resources */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '2rem'
      }} className="grid-2">
        {/* Popular companies */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Explore Companies</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            {companiesList.map(comp => (
              <Link 
                key={comp} 
                to={`/stories?company=${encodeURIComponent(comp)}`}
                className="editorial-card"
                style={{
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Building2 size={16} style={{ color: 'var(--success)' }} />
                  <span style={{ fontWeight: 500 }}>{comp}</span>
                </div>
                <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
              </Link>
            ))}
          </div>
        </div>

        {/* Latest resources */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Latest Uploads</h2>
            <Link to="/resources" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem'
            }}>
              Go to Resource Library <ChevronRight size={14} />
            </Link>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {latestResources.map((res, i) => (
              <div 
                key={i} 
                className="editorial-card"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.25rem'
                }}
              >
                <div>
                  <span className="label-caps" style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>
                    {res.folderName} &bull; {res.type}
                  </span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '0.25rem' }}>{res.title}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{res.desc}</p>
                </div>
                <a 
                  href={res.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary" 
                  style={{
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.75rem'
                  }}
                >
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
