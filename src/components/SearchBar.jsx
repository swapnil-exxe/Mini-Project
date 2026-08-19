import React from 'react'
import { Search } from 'lucide-react'

function SearchBar({ value, onChange, placeholder = "Search student, company, or role..." }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '1rem',
        transform: 'translateY(-50%)',
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        pointerEvents: 'none'
      }}>
        <Search size={18} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="form-control"
        style={{
          paddingLeft: '2.75rem',
          fontSize: '1rem',
          height: '48px',
          borderRadius: '8px'
        }}
      />
    </div>
  )
}

export default SearchBar
