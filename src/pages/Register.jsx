import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, User, GraduationCap, Settings } from 'lucide-react'

function Register({ onLogin }) {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    branch: 'CSE / AI-DS',
    currentYear: '3',
    batch: '2023-2027',
    passoutYear: '2027',
    role: 'student'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform simulated login
    onLogin(formData.email, formData.role)
    navigate('/dashboard')
  }

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem'
    }}>
      <div className="editorial-card" style={{
        maxWidth: '500px',
        width: '100%',
        padding: '2.5rem'
      }}>
        {/* Step indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: step === s ? '#ffffff' : 'var(--border-color)',
              transition: 'background-color 0.2s ease'
            }} />
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Personal Details</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Let's get started with your basic credentials.
            </p>
            
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="e.g. Swapnil Patel"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">College Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="e.g. swapnil@college.edu"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Password"
                required
              />
            </div>

            <button 
              type="button" 
              onClick={handleNext}
              disabled={!formData.name || !formData.email || !formData.password}
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1.5rem', gap: '0.5rem' }}
            >
              Continue
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Academic Details</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Help us show stories matching your academic background.
            </p>

            <div className="form-group">
              <label className="form-label">Engineering Branch</label>
              <select name="branch" value={formData.branch} onChange={handleChange} className="form-control">
                <option value="CSE / AI-DS">CSE / AI-DS</option>
                <option value="CE">Computer Engineering (CE)</option>
                <option value="EXTC">Electronics & Telecom (EXTC)</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Current Academic Year</label>
                <select name="currentYear" value={formData.currentYear} onChange={handleChange} className="form-control">
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Batch Range</label>
                <input
                  type="text"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. 2023-2027"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Pass-out Year</label>
              <input
                type="number"
                name="passoutYear"
                value={formData.passoutYear}
                onChange={handleChange}
                className="form-control"
                placeholder="e.g. 2027"
                required
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <button type="button" onClick={handleBack} className="btn btn-secondary" style={{ flexGrow: 1, gap: '0.5rem' }}>
                <ArrowLeft size={16} /> Back
              </button>
              <button 
                type="button" 
                onClick={handleNext}
                disabled={!formData.batch || !formData.passoutYear}
                className="btn btn-primary" 
                style={{ flexGrow: 1, gap: '0.5rem' }}
              >
                Continue
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Select Platform Role</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              How do you plan to use the LOOP platform?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* Role Cards */}
              <label style={{
                border: formData.role === 'student' ? '1px solid var(--border-focus)' : '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: formData.role === 'student' ? 'rgba(255,255,255,0.02)' : 'transparent'
              }}>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formData.role === 'student'}
                  onChange={handleChange}
                  style={{ accentColor: '#ffffff' }}
                />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Student (Junior / Reader)</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>I want to explore placement stories and study resources.</p>
                </div>
              </label>

              <label style={{
                border: formData.role === 'contributor' ? '1px solid var(--border-focus)' : '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: formData.role === 'contributor' ? 'rgba(255,255,255,0.02)' : 'transparent'
              }}>
                <input
                  type="radio"
                  name="role"
                  value="contributor"
                  checked={formData.role === 'contributor'}
                  onChange={handleChange}
                  style={{ accentColor: '#ffffff' }}
                />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Senior / Contributor</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>I have secured placements and want to submit my journey prompts.</p>
                </div>
              </label>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" onClick={handleBack} className="btn btn-secondary" style={{ flexGrow: 1, gap: '0.5rem' }}>
                <ArrowLeft size={16} /> Back
              </button>
              <button type="button" onClick={handleSubmit} className="btn btn-primary" style={{ flexGrow: 1 }}>
                Complete Profile
              </button>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Already have an account? <Link to="/login" style={{ color: '#ffffff', fontWeight: 600 }}>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Register
