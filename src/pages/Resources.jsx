import React, { useState } from 'react'
import { Folder, FolderOpen, ChevronRight, FileText, Globe, Search } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import ResourceCard from '../components/ResourceCard.jsx'

function Resources({ resources }) {
  const [activeFolderId, setActiveFolderId] = useState(resources[0]?.id || '')
  const [searchVal, setSearchVal] = useState('')

  const activeFolder = resources.find(r => r.id === activeFolderId)

  // Subfolders list helper for visual categorization (academic feel)
  const getSubcategories = (folderName) => {
    switch (folderName) {
      case 'DSA':
        return ['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming']
      case 'Core CS':
        return ['DBMS', 'Operating Systems', 'Computer Networks', 'OOP']
      default:
        return []
    }
  }

  // Filter items in the folder by search query if needed
  const filteredItems = activeFolder?.items.filter(item => {
    return (
      item.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchVal.toLowerCase())
    )
  }) || []

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <SectionHeader 
        label="Learning Library"
        title="Study Resources" 
        subtitle="Access subject-specific study sheets, roadmap folders, and tools shared by placed seniors."
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '2rem'
      }} className="grid-2">
        
        {/* Sidebar: Folder selectors */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Folders</h3>
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
                  onClick={() => { setActiveFolderId(folder.id); setSearchVal(''); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--border-focus)' : 'var(--border-color)',
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
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
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
                  style={{ height: '34px', fontSize: '0.8rem', paddingLeft: '2rem' }}
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

          {/* Academic Subcategories checklist indicator */}
          {activeFolder && getSubcategories(activeFolder.folderName).length > 0 && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center', marginRight: '0.5rem' }}>Covered topics:</span>
              {getSubcategories(activeFolder.folderName).map((sub, idx) => (
                <span 
                  key={idx} 
                  style={{
                    fontSize: '0.7rem',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-color)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {sub}
                </span>
              ))}
            </div>
          )}

          {/* Resource cards list */}
          {filteredItems.length > 0 ? (
            <div className="grid-3">
              {filteredItems.map((item, index) => (
                <ResourceCard 
                  key={index} 
                  resource={item} 
                  folderName={activeFolder.folderName} 
                />
              ))}
            </div>
          ) : (
            <div className="editorial-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <p style={{ color: 'var(--text-muted)' }}>No resources found in this folder matching your query.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Resources
