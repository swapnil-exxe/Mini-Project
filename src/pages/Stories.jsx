import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import SearchBar from '../components/SearchBar.jsx'
import FilterBar from '../components/FilterBar.jsx'
import StoryCard from '../components/StoryCard.jsx'
import { FileQuestion, RotateCcw } from 'lucide-react'

function Stories({ stories }) {
  const [searchParams, setSearchParams] = useSearchParams()

  // Read URL query parameters
  const branchParam = searchParams.get('branch') || ''
  const companyParam = searchParams.get('company') || ''
  const roleParam = searchParams.get('role') || ''
  const searchParam = searchParams.get('search') || ''

  // Local state initialized from query params
  const [searchVal, setSearchVal] = useState(searchParam)
  const [selectedBranch, setSelectedBranch] = useState(branchParam)
  const [selectedCompany, setSelectedCompany] = useState(companyParam)
  const [selectedRole, setSelectedRole] = useState(roleParam)
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedSort, setSelectedSort] = useState('latest')

  // Keep state sync'd if URL changes
  useEffect(() => {
    setSearchVal(searchParams.get('search') || '')
    setSelectedBranch(searchParams.get('branch') || '')
    setSelectedCompany(searchParams.get('company') || '')
    setSelectedRole(searchParams.get('role') || '')
  }, [searchParams])

  // Extract unique options from stories dataset for filters
  const uniqueBranches = [...new Set(stories.map(s => s.branch))]
  const uniqueCompanies = [...new Set(stories.map(s => s.company))]
  const uniqueRoles = [...new Set(stories.map(s => s.jobRole))]
  const uniqueYears = [...new Set(stories.map(s => s.passoutYear.toString()))]

  // Filter logic
  let filteredStories = stories.filter(story => {
    const matchesSearch = 
      story.studentName.toLowerCase().includes(searchVal.toLowerCase()) ||
      story.company.toLowerCase().includes(searchVal.toLowerCase()) ||
      story.jobRole.toLowerCase().includes(searchVal.toLowerCase()) ||
      story.branch.toLowerCase().includes(searchVal.toLowerCase())

    const matchesBranch = !selectedBranch || story.branch === selectedBranch
    const matchesCompany = !selectedCompany || story.company === selectedCompany
    const matchesRole = !selectedRole || story.jobRole === selectedRole
    const matchesYear = !selectedYear || story.passoutYear.toString() === selectedYear

    return matchesSearch && matchesBranch && matchesCompany && matchesRole && matchesYear
  })

  // Sorting logic
  filteredStories = [...filteredStories].sort((a, b) => {
    if (selectedSort === 'cgpa') {
      return (b.cgpa || 0) - (a.cgpa || 0)
    } else if (selectedSort === 'year') {
      return b.passoutYear - a.passoutYear
    } else if (selectedSort === 'company') {
      return a.company.localeCompare(b.company)
    }
    // Default: latest (placementYear or id)
    return (b.placementYear || 2025) - (a.placementYear || 2025)
  })

  // Handlers that update URL state as well
  const handleSearchChange = (val) => {
    setSearchVal(val)
    updateQueryParams({ search: val })
  }

  const handleBranchChange = (val) => {
    setSelectedBranch(val)
    updateQueryParams({ branch: val })
  }

  const handleCompanyChange = (val) => {
    setSelectedCompany(val)
    updateQueryParams({ company: val })
  }

  const handleRoleChange = (val) => {
    setSelectedRole(val)
    updateQueryParams({ role: val })
  }

  const handleYearChange = (val) => {
    setSelectedYear(val)
  }

  const handleSortChange = (val) => {
    setSelectedSort(val)
  }

  const handleReset = () => {
    setSearchVal('')
    setSelectedBranch('')
    setSelectedCompany('')
    setSelectedRole('')
    setSelectedYear('')
    setSelectedSort('latest')
    setSearchParams({})
  }

  const updateQueryParams = (newParams) => {
    const current = {}
    searchParams.forEach((value, key) => {
      current[key] = value
    })
    const updated = { ...current, ...newParams }
    // Clean empty values
    Object.keys(updated).forEach(key => {
      if (!updated[key]) delete updated[key]
    })
    setSearchParams(updated)
  }

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <SectionHeader 
        label="Placement Database"
        title="Placement Stories" 
        subtitle="Learn from seniors who have already walked the placement journey and cracked interviews at top companies."
      />

      {/* Search & Filter Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        marginBottom: '2.5rem'
      }}>
        <SearchBar value={searchVal} onChange={handleSearchChange} />
        
        <FilterBar 
          selectedBranch={selectedBranch} 
          onBranchChange={handleBranchChange}
          selectedCompany={selectedCompany}
          onCompanyChange={handleCompanyChange}
          selectedYear={selectedYear}
          onYearChange={handleYearChange}
          selectedRole={selectedRole}
          onRoleChange={handleRoleChange}
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
          onReset={handleReset}
          branches={uniqueBranches}
          companies={uniqueCompanies}
          years={uniqueYears}
          roles={uniqueRoles}
        />
      </div>

      {/* Active Results Summary */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
      }}>
        <span>Showing <strong>{filteredStories.length}</strong> placement {filteredStories.length === 1 ? 'story' : 'stories'}</span>
        {(selectedBranch || selectedCompany || selectedRole || selectedYear || searchVal) && (
          <button 
            onClick={handleReset}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--success)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.8rem'
            }}
          >
            <RotateCcw size={12} /> Clear all filters
          </button>
        )}
      </div>

      {/* Stories Output Grid */}
      {filteredStories.length > 0 ? (
        <div className="grid-3">
          {filteredStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div className="editorial-card" style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <FileQuestion size={48} style={{ color: 'var(--text-muted)' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>No Placement Stories Found</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '400px' }}>
            We couldn't find any stories matching your current search criteria. Try modifying your search term or resetting your filters.
          </p>
          <button onClick={handleReset} className="btn btn-secondary">
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default Stories
