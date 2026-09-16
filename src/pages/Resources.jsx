import React, { useState } from 'react'
import { Folder, FolderOpen, ChevronRight, FileText, Globe, Search, Download, ExternalLink } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import ResourceCard from '../components/ResourceCard.jsx'

function Resources({ resources }) {
  const [activeFolderId, setActiveFolderId] = useState(resources[0]?.id || '')
  const [searchVal, setSearchVal] = useState('')
  const [activeSubcategory, setActiveSubcategory] = useState('All')

  const activeFolder = resources.find(r => r.id === activeFolderId) || resources[0]

  // Subfolders list helper for visual categorization (academic feel)
  const getSubcategories = (folderName) => {
    switch (folderName) {
      case 'DSA':
        return ['All', 'Arrays', 'Strings', 'Trees', 'Graphs', 'Dynamic Programming']
      case 'Web Development':
        return ['All', 'Frontend', 'Backend', 'APIs', 'Performance']
      case 'DBMS':
        return ['All', 'SQL', 'Indexing', 'Normalization', 'NoSQL']
      case 'Operating Systems':
        return ['All', 'Process Scheduling', 'Concurrency', 'Memory']
      case 'Computer Networks':
        return ['All', 'TCP/IP', 'Subnetting', 'Protocols']
      case 'System Design':
        return ['All', 'Scalability', 'LLD', 'Sharding']
      case 'Aptitude':
        return ['All', 'Quantitative', 'Logical Reasoning']
      case 'Interview Preparation':
        return ['All', 'Behavioral', 'Resume', 'HR Questions']
      default:
        return ['All']
    }
  }

  // Filter items in the folder by search query and subcategory
  const filteredItems = activeFolder?.items.filter(item => {
    const matchesQuery = 
      item.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchVal.toLowerCase())

    const matchesSub = 
      activeSubcategory === 'All' || 
      item.title.toLowerCase().includes(activeSubcategory.toLowerCase()) ||
      item.desc.toLowerCase().includes(activeSubcategory.toLowerCase())

    return matchesQuery && matchesSub
  }) || []

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <SectionHeader 
        label="Learning Library"
        title="Study Resources Explorer" 
        subtitle="Access subject-specific study sheets, roadmap folders, code guides, and preparation tools shared by placed seniors."
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '2rem'
      }} className="grid-2">
        
        {/* Sidebar: Folder selectors */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Study Folders</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {resources.map(folder => {
              const isActive = folder.id === activeFolderId
              return (
                <button
                  key={folder.id}
                  onClick={() => { 
                    setActiveFolderId(folder.id); 
                    setSearchVal(''); 
                    setActiveSubcategory('All');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: isActive ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-color)',
                    borderRadius: '6px',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {isActive ? <FolderOpen size={16} style={{ color: 'var(--success)' }} /> : <Folder size={16} />}
                    <span style={{ fontWeight: isActive ? 600 : 400, fontSize: '0.9rem' }}>
                      {folder.folderName}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: isActive ? 'var(--success)' : 'var(--text-muted)' }}>
                    ({folder.items.length})
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div>
          {/* Active Folder Header */}
          {activeFolder && (
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '1rem',
              marginBottom: '1.5rem',
              gap: '1rem'
            }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{activeFolder.folderName}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{activeFolder.description}</p>
              </div>

              {/* In-folder search */}
              <div style={{ position: 'relative', width: '220px' }}>
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="form-control"
                  placeholder="Search in folder..."
                  style={{ height: '36px', fontSize: '0.8rem', paddingLeft: '2rem' }}
                />
                <Search size={14} style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0.7rem',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)'
                }} />
              </div>
            </div>
          )}

          {/* Academic Subcategories Filter Tags */}
          {activeFolder && getSubcategories(activeFolder.folderName).length > 0 && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              marginBottom: '1.5rem',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginRight: '0.5rem' }}>Subcategories:</span>
              {getSubcategories(activeFolder.folderName).map((sub, idx) => {
                const isSelected = activeSubcategory === sub
                return (
                  <button 
                    key={idx}
                    onClick={() => setActiveSubcategory(sub)}
                    style={{
                      fontSize: '0.75rem',
                      backgroundColor: isSelected ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.03)',
                      border: '1px solid',
                      borderColor: isSelected ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-color)',
                      padding: '3px 10px',
                      borderRadius: '4px',
                      color: isSelected ? 'var(--success)' : 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    {sub}
                  </button>
                )
              })}
            </div>
          )}

          {/* Resource cards list */}
          {filteredItems.length > 0 ? (
            <div className="grid-2">
              {filteredItems.map((item, index) => (
                <div 
                  key={index} 
                  className="editorial-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.25rem'
                  }}
                >
                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <span className="label-caps" style={{ fontSize: '0.65rem', color: 'var(--success)' }}>
                        {activeFolder.folderName}
                      </span>
                      <span style={{
                        fontSize: '0.7rem',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border-color)',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        color: 'var(--text-muted)'
                      }}>
                        {item.type}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.35rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                      {item.desc}
                    </p>
                  </div>

                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '0.5rem',
                      fontSize: '0.8rem',
                      gap: '0.4rem'
                    }}
                  >
                    {item.type === 'PDF' ? <Download size={14} /> : <ExternalLink size={14} />}
                    {item.type === 'PDF' ? 'Download PDF Resource' : 'Open Resource Link'}
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="editorial-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <p style={{ color: 'var(--text-muted)' }}>No study resources found matching your current filter.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Resources
