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
      background: 'rgba(13, 13, 14, 0.8)',
      backdropFilter: 'var(--glass-blur)',
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 0'
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
            padding: '2px 6px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '4px',
            fontWeight: 500,
            letterSpacing: '0.05em'
          }}>PHASE 1</span>
        </Link>

        {/* Desktop Nav Items */}
        <div style={{ display: 'none' }} className="desktop-nav-links">
          {/* We will write inline display: flex styles matching desktop media queries in css, but let's make it show via CSS class or inline styling with browser responsiveness. Wait, React styles are static, let's style it properly */}
        </div>
        
        {/* Style standard list in navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="nav-links-container" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <NavLink to="/stories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Stories</NavLink>
            <NavLink to="/resources" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Resources</NavLink>
            <NavLink to="/achievements" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Achievements</NavLink>
            
            {currentUser && (
              <>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
                {currentUser.role === 'admin' && (
                  <NavLink to="/admin" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Shield size={14} /> Admin
                  </NavLink>
                )}
                {(currentUser.role === 'contributor' || currentUser.role === 'admin') && (
                  <NavLink to="/submit-story" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <PenSquare size={14} /> Submit Story
                  </NavLink>
                )}
                <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <User size={14} /> Profile
                </NavLink>
              </>
            )}
          </div>

          {currentUser ? (
            <button onClick={handleLogoutClick} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
              <LogOut size={14} /> Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
              <LogIn size={14} /> Login
            </Link>
          )}

          {/* Mobile Menu Toggle button */}
          <button onClick={toggleMenu} className="menu-toggle-btn" style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'none'
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
          <Link to="/stories" onClick={closeMenu} style={{ padding: '0.5rem 0' }}>Stories</Link>
          <Link to="/resources" onClick={closeMenu} style={{ padding: '0.5rem 0' }}>Resources</Link>
          <Link to="/achievements" onClick={closeMenu} style={{ padding: '0.5rem 0' }}>Achievements</Link>
          {currentUser && (
            <>
              <Link to="/dashboard" onClick={closeMenu} style={{ padding: '0.5rem 0' }}>Dashboard</Link>
              {currentUser.role === 'admin' && (
                <Link to="/admin" onClick={closeMenu} style={{ padding: '0.5rem 0', color: 'var(--warning)' }}>Admin Panel</Link>
              )}
              {(currentUser.role === 'contributor' || currentUser.role === 'admin') && (
                <Link to="/submit-story" onClick={closeMenu} style={{ padding: '0.5rem 0' }}>Submit Story</Link>
              )}
              <Link to="/profile" onClick={closeMenu} style={{ padding: '0.5rem 0' }}>My Profile</Link>
            </>
          )}
          {currentUser ? (
            <button onClick={handleLogoutClick} className="btn btn-secondary" style={{ width: '100%' }}>
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={closeMenu} className="btn btn-primary" style={{ width: '100%' }}>
              Login
            </Link>
          )}
        </div>
      )}

      {/* Quick dynamic inline style injections for styling the active states and media queries */}
      <style>{`
        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: #ffffff;
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
