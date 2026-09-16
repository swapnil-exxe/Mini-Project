import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { BookOpen, FileText, Building2, Trophy, Search, ChevronRight, Compass, Sparkles, Filter, GraduationCap, Briefcase } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import StatCard from '../components/StatCard.jsx'
import StoryCard from '../components/StoryCard.jsx'

function Dashboard({ currentUser, stories, resources, achievements }) {
  const [searchVal, setSearchVal] = useState('')
  const navigate = useNavigate()

  // Filter recommendations based on student's branch
  const recommendedStories = stories.filter(s => s.branch === currentUser?.branch).slice(0, 3)
  const otherStories = stories.filter(s => s.branch !== currentUser?.branch).slice(0, 3)
  const dashboardStories = recommendedStories.length > 0 ? recommendedStories : otherStories

  // Flatten resources for display
  const latestResources = resources.flatMap(folder => 
    folder.items.map(item => ({ ...item, folderName: folder.folderName }))
  ).slice(0, 4)

  // Popular companies list
  const companiesList = ["Microsoft", "Google", "NVIDIA", "Cisco", "Zoho", "Morgan Stanley", "Adobe", "Atlassian"]
  const branchList = ["CSE / AI-DS", "CE", "EXTC", "IT"]
  const rolesList = ["Software Engineer", "Associate Product Manager", "Hardware Design Engineer", "Frontend Engineer", "Technology Analyst"]

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchVal.trim()) {
      navigate(`/stories?search=${encodeURIComponent(searchVal)}`)
    }
  }

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      
      {/* 1. Welcome & Platform Mission Banner */}
      <div className="editorial-card" style={{
        marginBottom: '2.5rem',
        padding: '2.5rem',
        background: 'linear-gradient(135deg, rgba(22, 22, 24, 0.9) 0%, rgba(16, 185, 129, 0.05) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ maxWidth: '650px' }}>
            <span className="label-caps" style={{ 
              color: 'var(--success)', 
              background: 'rgba(16, 185, 129, 0.1)', 
              padding: '3px 10px',
              borderRadius: '20px',
              fontSize: '0.7rem'
            }}>
              STUDENT PLACEMENT HUB &bull; LOOP PHASE II
            </span>
            
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Welcome back, {currentUser?.name || "Student"}!
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              LOOP is your centralized college placement knowledge-sharing platform. Explore authentic 4-year timelines, interview logs, verified resumes, and subject study resources shared by senior peers.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/stories" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                <Sparkles size={16} /> Explore Placement Stories
              </Link>
              <Link to="/resources" className="btn btn-secondary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                <BookOpen size={16} /> Study Resources Shortcut
              </Link>
            </div>
          </div>

          {/* Search box on landing header */}
          <form onSubmit={handleSearchSubmit} style={{
            minWidth: '280px',
            flexGrow: 1,
            maxWidth: '350px'
          }}>
            <label className="form-label" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Quick Search Placement Database</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="form-control"
                placeholder="Company, Senior, or Role..."
                style={{ paddingLeft: '2.5rem', height: '44px' }}
              />
              <Search size={16} style={{
                position: 'absolute',
                top: '50%',
                left: '0.85rem',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} />
            </div>
          </form>
        </div>
      </div>

      {/* 2. Key Metrics Row */}
      <div className="grid-4" style={{ marginBottom: '3rem' }}>
        <StatCard 
          label="Placement Stories" 
          value={stories.length} 
          icon={<BookOpen size={20} style={{ color: 'var(--success)' }} />} 
          description="Verified senior experiences"
        />
        <StatCard 
          label="Study Resources" 
          value={resources.reduce((acc, f) => acc + f.items.length, 0)} 
          icon={<FileText size={20} />} 
          description="Subject guides & folders"
        />
        <StatCard 
          label="Recruiting Companies" 
          value={companiesList.length} 
          icon={<Building2 size={20} />} 
          description="On-campus & off-campus"
        />
        <StatCard 
          label="Campus Achievements" 
          value={achievements.length} 
          icon={<Trophy size={20} />} 
          description="Hackathons & publications"
        />
      </div>

      {/* 3. Quick Browse Shortcuts Section (Branch, Company, Year, Role) */}
      <div style={{ marginBottom: '3.5rem' }}>
        <SectionHeader 
          label="Placement Discovery"
          title="Browse Placement Intelligence" 
          subtitle="Filter senior stories by target companies, engineering branches, or job profiles."
        />

        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          {/* Browse by Branch */}
          <div className="editorial-card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={16} style={{ color: 'var(--success)' }} /> Browse by Branch
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {branchList.map(b => (
                <Link 
                  key={b} 
                  to={`/stories?branch=${encodeURIComponent(b)}`}
                  style={{
                    fontSize: '0.75rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-color)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {b}
                </Link>
              ))}
            </div>
          </div>

          {/* Browse by Company */}
          <div className="editorial-card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building2 size={16} style={{ color: 'var(--success)' }} /> Browse by Company
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {companiesList.slice(0, 6).map(c => (
                <Link 
                  key={c} 
                  to={`/stories?company=${encodeURIComponent(c)}`}
                  style={{
                    fontSize: '0.75rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-color)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>

          {/* Browse by Role */}
          <div className="editorial-card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={16} style={{ color: 'var(--success)' }} /> Browse by Role
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {rolesList.slice(0, 4).map(r => (
                <Link 
                  key={r} 
                  to={`/stories?role=${encodeURIComponent(r)}`}
                  style={{
                    fontSize: '0.75rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-color)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {r}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Recommended & Featured Placement Stories */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '1.5rem'
        }}>
          <div>
            <span className="label-caps" style={{ color: 'var(--success)' }}>Recommended for {currentUser?.branch || "You"}</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Featured Senior Stories</h2>
          </div>
          <Link to="/stories" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'var(--text-secondary)',
            fontSize: '0.85rem'
          }}>
            View All Stories ({stories.length}) <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid-3">
          {dashboardStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>

      {/* 5. Study Resources Shortcut & Latest Uploads */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '2rem'
      }} className="grid-2">
        
        {/* Resource Categories shortcut */}
        <div className="editorial-card" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
            Study Folders
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Access curated study guides, code notes, and interview prep sheets.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {resources.map(folder => (
              <Link 
                key={folder.id} 
                to="/resources"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  fontSize: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={15} style={{ color: 'var(--success)' }} />
                  <span>{folder.folderName}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{folder.items.length} items</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Latest Resource Items list */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '1rem'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Recent Resource Uploads</h2>
            <Link to="/resources" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Open Library <ChevronRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {latestResources.map((res, i) => (
              <div 
                key={i} 
                className="editorial-card"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.15rem'
                }}
              >
                <div>
                  <span className="label-caps" style={{ fontSize: '0.65rem', color: 'var(--success)' }}>
                    {res.folderName} &bull; {res.type}
                  </span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '0.2rem' }}>{res.title}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{res.desc}</p>
                </div>
                <a 
                  href={res.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary" 
                  style={{ padding: '0.4rem 0.85rem', fontSize: '0.75rem' }}
                >
                  View / Open
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
