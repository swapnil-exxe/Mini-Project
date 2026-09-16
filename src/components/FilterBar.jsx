import React from 'react'
import { Filter, RotateCcw, ArrowUpDown } from 'lucide-react'

function FilterBar({
  selectedBranch,
  onBranchChange,
  selectedCompany,
  onCompanyChange,
  selectedYear,
  onYearChange,
  selectedRole,
  onRoleChange,
  selectedSort,
  onSortChange,
  onReset,
  branches = [],
  companies = [],
  years = [],
  roles = []
}) {
  return (
    <div style={{
      background: 'var(--surface-color)',
      backdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '1rem',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Branch Filter */}
        <div>
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
        <div>
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

        {/* Role Filter */}
        <div>
          <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Placement Role</label>
          <select 
            value={selectedRole} 
            onChange={(e) => onRoleChange(e.target.value)}
            className="form-control"
            style={{ padding: '0.5rem', height: '38px', fontSize: '0.85rem' }}
          >
            <option value="">All Roles</option>
            {roles.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        {/* Pass-out Year Filter */}
        <div>
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

        {/* Sorting Options */}
        <div>
          <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Sort By</label>
          <select 
            value={selectedSort} 
            onChange={(e) => onSortChange(e.target.value)}
            className="form-control"
            style={{ padding: '0.5rem', height: '38px', fontSize: '0.85rem' }}
          >
            <option value="latest">Latest Stories</option>
            <option value="cgpa">CGPA: High to Low</option>
            <option value="year">Passout Year</option>
            <option value="company">Company (A-Z)</option>
          </select>
        </div>

        {/* Reset button */}
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%' }}>
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
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
