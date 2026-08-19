import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Shield, Users, LogIn } from 'lucide-react'

function Login({ onLogin, currentUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  
  // Selection role for easy prototype exploration
  const [role, setRole] = useState('student')
  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(email || `${role}@college.edu`, role)
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
        maxWidth: '450px',
        width: '100%',
        padding: '2.5rem'
      }}>
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Sign In</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Connect with your college placement community.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Credentials Inputs */}
          <div className="form-group">
            <label className="form-label">College Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="e.g. swapnil@college.edu"
              required
            />
          </div>

          <div className="form-group" style={{ position: 'relative' }}>
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                style={{ paddingRight: '2.5rem' }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '0.75rem',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Prototype Selector Panel (extremely helpful for review) */}
          <div style={{
            margin: '1.5rem 0',
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px'
          }}>
            <span className="label-caps" style={{ display: 'block', fontSize: '0.65rem', marginBottom: '0.5rem', color: 'var(--warning)' }}>
              PROTOTYPE SHORTCUT ROLE
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => { setRole('student'); setEmail('student@college.edu'); }}
                className="btn btn-secondary"
                style={{
                  flexGrow: 1,
                  padding: '0.35rem',
                  fontSize: '0.75rem',
                  backgroundColor: role === 'student' ? 'rgba(255,255,255,0.06)' : 'transparent',
                  borderColor: role === 'student' ? 'var(--border-focus)' : 'var(--border-color)'
                }}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => { setRole('contributor'); setEmail('senior@college.edu'); }}
                className="btn btn-secondary"
                style={{
                  flexGrow: 1,
                  padding: '0.35rem',
                  fontSize: '0.75rem',
                  backgroundColor: role === 'contributor' ? 'rgba(255,255,255,0.06)' : 'transparent',
                  borderColor: role === 'contributor' ? 'var(--border-focus)' : 'var(--border-color)'
                }}
              >
                Senior
              </button>
              <button
                type="button"
                onClick={() => { setRole('admin'); setEmail('admin@college.edu'); }}
                className="btn btn-secondary"
                style={{
                  flexGrow: 1,
                  padding: '0.35rem',
                  fontSize: '0.75rem',
                  backgroundColor: role === 'admin' ? 'rgba(255,255,255,0.06)' : 'transparent',
                  borderColor: role === 'admin' ? 'var(--border-focus)' : 'var(--border-color)'
                }}
              >
                Admin
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '0.5rem' }}>
            <LogIn size={16} /> Sign In
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Don't have an account? <Link to="/register" style={{ color: '#ffffff', fontWeight: 600 }}>Create an account</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
