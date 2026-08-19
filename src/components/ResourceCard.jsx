import React from 'react'
import { FileText, Link2, Download, ExternalLink } from 'lucide-react'

function ResourceCard({ resource, folderName }) {
  const getIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'pdf':
        return <FileText size={18} style={{ color: '#ef4444' }} />
      case 'link':
        return <Link2 size={18} style={{ color: '#3b82f6' }} />
      default:
        return <FileText size={18} style={{ color: '#10b981' }} />
    }
  }

  return (
    <div className="editorial-card" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    }}>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {getIcon(resource.type)}
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              {resource.type}
            </span>
          </div>
          {folderName && (
            <span style={{
              fontSize: '0.65rem',
              backgroundColor: 'rgba(255,255,255,0.05)',
              padding: '2px 6px',
              borderRadius: '4px',
              color: 'var(--text-secondary)'
            }}>
              {folderName}
            </span>
          )}
        </div>

        <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
          {resource.title}
        </h4>
        
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.5',
          marginBottom: '1.25rem'
        }}>
          {resource.desc}
        </p>
      </div>

      <a 
        href={resource.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-secondary" 
        style={{
          width: '100%',
          fontSize: '0.8rem',
          padding: '0.5rem 1rem',
          gap: '0.4rem'
        }}
      >
        {resource.type?.toLowerCase() === 'pdf' ? (
          <>
            <Download size={14} /> Download PDF
          </>
        ) : (
          <>
            <ExternalLink size={14} /> View Material
          </>
        )}
      </a>
    </div>
  )
}

export default ResourceCard
