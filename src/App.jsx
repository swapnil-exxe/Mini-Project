import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Import Pages
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Branches from './pages/Branches.jsx'
import Stories from './pages/Stories.jsx'
import StoryDetail from './pages/StoryDetail.jsx'
import ResumeViewer from './pages/ResumeViewer.jsx'
import Resources from './pages/Resources.jsx'
import Achievements from './pages/Achievements.jsx'
import SubmitStory from './pages/SubmitStory.jsx'
import Profile from './pages/Profile.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

// Mock Data Imports
import {
  placementStories as initialStories,
  studyResources as initialResources,
  campusAchievements as initialAchievements,
  pendingStoriesList as initialPendingStories,
  pendingResourcesList as initialPendingResources
} from './mockData.js'

function App() {
  // Global State for Prototype Interactions
  const [currentUser, setCurrentUser] = useState({
    name: "Swapnil Patel",
    email: "swapnil@college.edu",
    role: "student", // 'student' | 'contributor' | 'admin'
    branch: "CSE / AI-DS",
    currentYear: 3,
    batch: "2023-2027",
    passoutYear: 2027,
    cgpa: 9.2
  })

  const [stories, setStories] = useState(initialStories)
  const [pendingStories, setPendingStories] = useState(initialPendingStories)
  const [resources, setResources] = useState(initialResources)
  const [pendingResources, setPendingResources] = useState(initialPendingResources)
  const [achievements, setAchievements] = useState(initialAchievements)

  // Login handler
  const handleLogin = (email, role) => {
    let name = "Swapnil Patel"
    if (role === 'admin') name = "Admin Coordinator"
    else if (role === 'contributor') name = "Aarav Sharma"

    setCurrentUser({
      name,
      email,
      role,
      branch: role === 'contributor' ? "CSE / AI-DS" : "CSE / AI-DS",
      currentYear: role === 'student' ? 3 : 4,
      batch: "2023-2027",
      passoutYear: 2027,
      cgpa: 9.2
    })
  }

  // Logout handler
  const handleLogout = () => {
    setCurrentUser(null)
  }

  // Submit Story handler
  const handleAddPendingStory = (newStory) => {
    const pendingItem = {
      id: `pending-${Date.now()}`,
      studentName: newStory.studentName,
      company: newStory.company,
      branch: newStory.branch,
      submissionDate: new Date().toISOString().split('T')[0],
      jobRole: newStory.jobRole,
      batch: newStory.batch,
      passoutYear: newStory.passoutYear,
      cgpa: newStory.cgpa,
      journey: newStory.journey,
      strategy: newStory.strategy,
      studyMaterials: newStory.studyMaterials || []
    }
    setPendingStories([pendingItem, ...pendingStories])
  }

  // Admin Approve Story
  const handleApproveStory = (id) => {
    const storyToApprove = pendingStories.find(s => s.id === id)
    if (storyToApprove) {
      const activeStory = {
        ...storyToApprove,
        id: storyToApprove.id.replace('pending-', 'story-'),
        placementYear: new Date().getFullYear()
      }
      setStories([activeStory, ...stories])
      setPendingStories(pendingStories.filter(s => s.id !== id))
    }
  }

  // Admin Reject Story
  const handleRejectStory = (id) => {
    setPendingStories(pendingStories.filter(s => s.id !== id))
  }

  // Admin Approve Resource
  const handleApproveResource = (id) => {
    const resToApprove = pendingResources.find(r => r.id === id)
    if (resToApprove) {
      // Find matching folder or create/add to folder
      setResources(prev => prev.map(folder => {
        if (folder.folderName === resToApprove.folder) {
          return {
            ...folder,
            items: [
              ...folder.items,
              {
                title: resToApprove.title,
                desc: resToApprove.description,
                type: resToApprove.type,
                link: "#"
              }
            ]
          }
        }
        return folder
      }))
      setPendingResources(pendingResources.filter(r => r.id !== id))
    }
  }

  // Admin Reject Resource
  const handleRejectResource = (id) => {
    setPendingResources(pendingResources.filter(r => r.id !== id))
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar currentUser={currentUser} onLogout={handleLogout} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing stories={stories} achievements={achievements} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} currentUser={currentUser} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            
            <Route path="/dashboard" element={
              currentUser ? (
                <Dashboard 
                  currentUser={currentUser} 
                  stories={stories} 
                  resources={resources} 
                  achievements={achievements} 
                />
              ) : (
                <Navigate to="/login" />
              )
            } />
            
            <Route path="/branches" element={<Branches />} />
            <Route path="/stories" element={<Stories stories={stories} />} />
            <Route path="/stories/:id" element={<StoryDetail stories={stories} pendingStories={pendingStories} />} />
            <Route path="/resume/:id" element={<ResumeViewer stories={stories} pendingStories={pendingStories} />} />
            
            <Route path="/resources" element={<Resources resources={resources} />} />
            <Route path="/achievements" element={<Achievements achievements={achievements} />} />
            
            <Route path="/submit-story" element={
              currentUser ? (
                <SubmitStory onSubmit={handleAddPendingStory} currentUser={currentUser} />
              ) : (
                <Navigate to="/login" />
              )
            } />
            
            <Route path="/profile" element={
              currentUser ? (
                <Profile currentUser={currentUser} stories={stories} pendingStories={pendingStories} />
              ) : (
                <Navigate to="/login" />
              )
            } />
            
            <Route path="/admin" element={
              currentUser && currentUser.role === 'admin' ? (
                <AdminDashboard 
                  pendingStories={pendingStories} 
                  pendingResources={pendingResources} 
                  onApproveStory={handleApproveStory} 
                  onRejectStory={handleRejectStory}
                  onApproveResource={handleApproveResource}
                  onRejectResource={handleRejectResource}
                  storiesCount={stories.length}
                />
              ) : (
                <Navigate to="/login" />
              )
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
