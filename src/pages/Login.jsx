import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Shield, Users, LogIn, Lock, Mail } from 'lucide-react'

function Login({ onLogin, currentUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // Selection role for easy prototype exploration
  const [role, setRole] = useState('student')
  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      onLogin(email || `${role}@college.edu`, role)
      setIsLoading(false)
      navigate('/dashboard')
    }, 400)
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
        maxWidth: '460px',
        width: '100%',
        padding: '2.5rem'
      }}>
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="label-caps" style={{ color: 'var(--success)' }}>PORTAL ACCESS</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.2rem' }}>Sign In to LOOP</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
            Access placement stories, interview logs, and verified resources.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Credentials Inputs */}
          <div className="form-group">
            <label className="form-label">College Email Address</label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="e.g. swapnil@college.edu"
                style={{ paddingLeft: '2.5rem' }}
                required
              />
              <Mail size={16} style={{
                position: 'absolute',
                top: '50%',
                left: '0.85rem',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="••••••••"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                required
              />
              <Lock size={16} style={{
                position: 'absolute',
                top: '50%',
                left: '0.85rem',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} />
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

          {/* Demonstration Role Shortcut Selector */}
          <div style={{
            margin: '1.5rem 0',
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px'
          }}>
            <span className="label-caps" style={{ display: 'block', fontSize: '0.65rem', marginBottom: '0.5rem', color: 'var(--warning)' }}>
              DEMONSTRATION ROLE SHORTCUT
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => { setRole('student'); setEmail('student@college.edu'); setPassword('password'); }}
                className="btn btn-secondary"
                style={{
                  flexGrow: 1,
                  padding: '0.4rem',
                  fontSize: '0.75rem',
                  backgroundColor: role === 'student' ? 'rgba(255,255,255,0.08)' : 'transparent',
                  borderColor: role === 'student' ? 'var(--border-focus)' : 'var(--border-color)',
                  color: role === 'student' ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => { setRole('contributor'); setEmail('senior@college.edu'); setPassword('password'); }}
                className="btn btn-secondary"
                style={{
                  flexGrow: 1,
                  padding: '0.4rem',
                  fontSize: '0.75rem',
                  backgroundColor: role === 'contributor' ? 'rgba(255,255,255,0.08)' : 'transparent',
                  borderColor: role === 'contributor' ? 'var(--border-focus)' : 'var(--border-color)',
                  color: role === 'contributor' ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                Senior
              </button>
              <button
                type="button"
                onClick={() => { setRole('admin'); setEmail('admin@college.edu'); setPassword('password'); }}
                className="btn btn-secondary"
                style={{
                  flexGrow: 1,
                  padding: '0.4rem',
                  fontSize: '0.75rem',
                  backgroundColor: role === 'admin' ? 'rgba(255,255,255,0.08)' : 'transparent',
                  borderColor: role === 'admin' ? 'var(--border-focus)' : 'var(--border-color)',
                  color: role === 'admin' ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                Admin
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '0.5rem', height: '44px' }} disabled={isLoading}>
            <LogIn size={16} /> {isLoading ? "Signing in..." : "Sign In"}
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
