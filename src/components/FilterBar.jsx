import React from 'react'
import { Filter, RotateCcw } from 'lucide-react'

function FilterBar({
  selectedBranch,
  onBranchChange,
  selectedCompany,
  onCompanyChange,
  selectedYear,
  onYearChange,
  onReset,
  branches = [],
  companies = [],
  years = []
}) {
  return (
    <div style={{
      background: 'var(--surface-color)',
      backdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
      padding: '1.25rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        flexGrow: 1
      }}>
        {/* Branch Filter */}
        <div style={{ minWidth: '150px', flexGrow: 1 }}>
          <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Branch</label>
          <select 
            value={selectedBranch} 
            onChange={(e) => onBranchChange(e.target.value)}
            className="form-control"
            style={{ padding: '0.5rem', height: '38px', fontSize: '0.85rem' }}
          >
            <option value="">All Branches</option>
            {branches.map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Company Filter */}
        <div style={{ minWidth: '150px', flexGrow: 1 }}>
          <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Company</label>
          <select 
            value={selectedCompany} 
            onChange={(e) => onCompanyChange(e.target.value)}
            className="form-control"
            style={{ padding: '0.5rem', height: '38px', fontSize: '0.85rem' }}
          >
            <option value="">All Companies</option>
            {companies.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Pass-out Year Filter */}
        <div style={{ minWidth: '120px', flexGrow: 1 }}>
          <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Passout Year</label>
          <select 
            value={selectedYear} 
            onChange={(e) => onYearChange(e.target.value)}
            className="form-control"
            style={{ padding: '0.5rem', height: '38px', fontSize: '0.85rem' }}
          >
            <option value="">All Years</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset button */}
      <button 
        onClick={onReset}
        className="btn btn-secondary"
        style={{
          height: '38px',
          padding: '0 1rem',
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          marginTop: 'auto'
        }}
      >
        <RotateCcw size={14} />
        Reset
      </button>
    </div>
  )
}

export default FilterBar
