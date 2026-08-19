import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import SearchBar from '../components/SearchBar.jsx'
import FilterBar from '../components/FilterBar.jsx'
import StoryCard from '../components/StoryCard.jsx'
import { FileQuestion } from 'lucide-react'

function Stories({ stories }) {
  const [searchParams, setSearchParams] = useSearchParams()

  // Read URL query parameters
  const branchParam = searchParams.get('branch') || ''
  const companyParam = searchParams.get('company') || ''
  const searchParam = searchParams.get('search') || ''

  // Local state initialized from query params
  const [searchVal, setSearchVal] = useState(searchParam)
  const [selectedBranch, setSelectedBranch] = useState(branchParam)
  const [selectedCompany, setSelectedCompany] = useState(companyParam)
  const [selectedYear, setSelectedYear] = useState('')

  // Keep state sync'd if URL changes
  useEffect(() => {
    setSearchVal(searchParams.get('search') || '')
    setSelectedBranch(searchParams.get('branch') || '')
    setSelectedCompany(searchParams.get('company') || '')
  }, [searchParams])

  // Extract unique options from mock data for filters
  const uniqueBranches = [...new Set(stories.map(s => s.branch))]
  const uniqueCompanies = [...new Set(stories.map(s => s.company))]
  const uniqueYears = [...new Set(stories.map(s => s.passoutYear.toString()))]

  // Filter logic
  const filteredStories = stories.filter(story => {
    const matchesSearch = 
      story.studentName.toLowerCase().includes(searchVal.toLowerCase()) ||
      story.company.toLowerCase().includes(searchVal.toLowerCase()) ||
      story.jobRole.toLowerCase().includes(searchVal.toLowerCase())

    const matchesBranch = !selectedBranch || story.branch === selectedBranch
    const matchesCompany = !selectedCompany || story.company === selectedCompany
    const matchesYear = !selectedYear || story.passoutYear.toString() === selectedYear

    return matchesSearch && matchesBranch && matchesCompany && matchesYear
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

  const handleYearChange = (val) => {
    setSelectedYear(val)
  }

  const handleReset = () => {
    setSearchVal('')
    setSelectedBranch('')
    setSelectedCompany('')
    setSelectedYear('')
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
        subtitle="Learn from students who have already walked the placement journey and successfully cracked interviews."
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
          onReset={handleReset}
          branches={uniqueBranches}
          companies={uniqueCompanies}
          years={uniqueYears}
        />
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
            We couldn't find any stories matching your current search criteria. Try modifying your filters or resetting them.
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
