import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, LogIn, LogOut, FileText, Award, BookOpen, User, Shield, PenSquare, LayoutDashboard } from 'lucide-react'

function Navbar({ currentUser, onLogout }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleLogoutClick = () => {
    onLogout()
    closeMenu()
    navigate('/')
  }

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(13, 13, 14, 0.85)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.85rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" onClick={closeMenu} style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.5rem',
          letterSpacing: '-0.03em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#ffffff'
        }}>
          LOOP
          <span style={{
            fontSize: '0.65rem',
            padding: '2px 7px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: 'var(--success)',
            borderRadius: '4px',
            fontWeight: 600,
            letterSpacing: '0.05em'
          }}>PHASE II</span>
        </Link>
        
        {/* Navigation Items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div className="nav-links-container" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <NavLink to="/stories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Placement Stories</NavLink>
            <NavLink to="/resources" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Study Resources</NavLink>
            <NavLink to="/achievements" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Achievements</NavLink>
            
            {currentUser && (
              <>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Dashboard
                </NavLink>
                <NavLink to="/submit-story" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <PenSquare size={14} /> Submit Story
                </NavLink>
                {currentUser.role === 'admin' && (
                  <NavLink to="/admin" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Shield size={14} /> Admin
                  </NavLink>
                )}
                <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <User size={14} /> Profile
                </NavLink>
              </>
            )}
          </div>

          {/* User Account Controls */}
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                display: 'none',
                alignItems: 'center',
                gap: '0.3rem'
              }} className="user-badge">
                <span className={`role-pill role-${currentUser.role}`}>
                  {currentUser.role}
                </span>
              </span>
              <button onClick={handleLogoutClick} className="btn btn-secondary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}>
                <LogOut size={14} /> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}>
              <LogIn size={14} /> Sign In
            </Link>
          )}

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="menu-toggle-btn" style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'none',
            padding: '0.25rem'
          }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-color)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 99
        }}>
          <Link to="/stories" onClick={closeMenu} style={{ padding: '0.5rem 0', fontSize: '0.95rem' }}>Placement Stories</Link>
          <Link to="/resources" onClick={closeMenu} style={{ padding: '0.5rem 0', fontSize: '0.95rem' }}>Study Resources</Link>
          <Link to="/achievements" onClick={closeMenu} style={{ padding: '0.5rem 0', fontSize: '0.95rem' }}>Achievements</Link>
          {currentUser && (
            <>
              <Link to="/dashboard" onClick={closeMenu} style={{ padding: '0.5rem 0', fontSize: '0.95rem' }}>Student Dashboard</Link>
              <Link to="/submit-story" onClick={closeMenu} style={{ padding: '0.5rem 0', fontSize: '0.95rem' }}>Submit Placement Story</Link>
              {currentUser.role === 'admin' && (
                <Link to="/admin" onClick={closeMenu} style={{ padding: '0.5rem 0', fontSize: '0.95rem', color: 'var(--warning)' }}>Admin Dashboard</Link>
              )}
              <Link to="/profile" onClick={closeMenu} style={{ padding: '0.5rem 0', fontSize: '0.95rem' }}>User Profile</Link>
            </>
          )}
          {currentUser ? (
            <button onClick={handleLogoutClick} className="btn btn-secondary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={closeMenu} className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Sign In
            </Link>
          )}
        </div>
      )}

      <style>{`
        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.88rem;
          transition: color 0.2s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: #ffffff;
        }
        .role-pill {
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.7rem;
          text-transform: uppercase;
          font-weight: 600;
        }
        .role-student { background: rgba(59, 130, 246, 0.15); color: #60a5fa; }
        .role-contributor { background: rgba(16, 185, 129, 0.15); color: #34d399; }
        .role-admin { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }

        @media (min-width: 901px) {
          .user-badge { display: inline-flex !important; }
        }
        @media (max-width: 900px) {
          .nav-links-container {
            display: none !important;
          }
          .menu-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
