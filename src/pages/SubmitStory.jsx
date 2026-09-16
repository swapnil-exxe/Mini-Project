import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, Send, ShieldAlert, FileText, ArrowRight, UploadCloud, AlertCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function SubmitStory({ onSubmit, currentUser }) {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  // Form states mapping to senior storytelling sections
  const [formData, setFormData] = useState({
    studentName: currentUser?.name || '',
    branch: currentUser?.branch || 'CSE / AI-DS',
    batch: currentUser?.batch || '2022-2026',
    passoutYear: currentUser?.passoutYear || 2026,
    company: '',
    jobRole: '',
    cgpa: currentUser?.cgpa || '',
    firstYear: '',
    secondYear: '',
    thirdYear: '',
    fourthYear: '',
    dsaPrep: '',
    coreCsPrep: '',
    projectsPrep: '',
    internshipPrep: '',
    aptitudePrep: '',
    interviewPrep: '',
    onlineAssessment: '',
    technicalRounds: '',
    hrRound: '',
    keyTopics: '',
    advice: '',
    resumeName: '',
    studyLinks: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData({
        ...formData,
        resumeName: file.name
      })

      // Simulate file upload progress indicator
      setUploading(true)
      setUploadProgress(10)
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setUploading(false)
            return 100
          }
          return prev + 30
        })
      }, 200)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Package data for parent state update
    const storyPayload = {
      studentName: formData.studentName,
      branch: formData.branch,
      batch: formData.batch,
      passoutYear: parseInt(formData.passoutYear),
      company: formData.company,
      jobRole: formData.jobRole,
      cgpa: formData.cgpa ? parseFloat(formData.cgpa) : undefined,
      status: "Pending",
      submissionDate: new Date().toISOString().split('T')[0],
      journey: {
        firstYear: formData.firstYear,
        secondYear: formData.secondYear,
        thirdYear: formData.thirdYear,
        fourthYear: formData.fourthYear
      },
      strategy: {
        dsa: formData.dsaPrep || formData.preparation,
        coreCs: formData.coreCsPrep,
        projects: formData.projectsPrep,
        internship: formData.internshipPrep,
        aptitude: formData.aptitudePrep,
        interview: formData.interviewPrep,
        preparation: formData.dsaPrep || "Structured DSA and Core CS revision.",
        howISecured: "On-campus placement selection drive.",
        advice: formData.advice
      },
      interviewRounds: {
        onlineAssessment: formData.onlineAssessment || "Completed OA coding test.",
        technicalRounds: formData.technicalRounds || "Cleared technical interview rounds.",
        hrRound: formData.hrRound || "Cleared HR behavioral round.",
        keyTopics: formData.keyTopics,
        generalExperience: "Smooth and collaborative selection process."
      },
      studyMaterials: formData.studyLinks ? formData.studyLinks.split(',').map(link => ({
        title: "Shared Reference Material",
        url: link.trim()
      })) : []
    }

    onSubmit(storyPayload)
    setSuccess(true)
    setTimeout(() => {
      navigate('/profile')
    }, 2500)
  }

  if (success) {
    return (
      <div className="container" style={{
        padding: '5rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '1.25rem'
      }}>
        <div style={{ color: 'var(--success)' }}>
          <CheckCircle2 size={64} />
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Submission Successful!</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Your placement story has been submitted for administrator review.
        </p>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Redirecting to your user profile page...
        </span>
      </div>
    )
  }

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '880px' }}>
      <SectionHeader 
        label="Senior Peer Mentorship"
        title="Submit Your Placement Story" 
        subtitle="Translate your study methods, year-by-year journey, and interview questions into a clear guide for your junior peers."
      />

      {/* Moderation notice */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1.25rem',
        border: '1px solid rgba(245, 158, 11, 0.2)',
        backgroundColor: 'rgba(245, 158, 11, 0.04)',
        borderRadius: '8px',
        marginBottom: '2rem',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
      }}>
        <ShieldAlert size={20} style={{ color: 'var(--warning)', flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>Administrator Moderation Notice</strong>
          To ensure platform data integrity, your story submission will enter the administrator review queue before publishing to the student portal.
        </div>
      </div>

      <form onSubmit={handleSubmit} className="editorial-card" style={{ padding: '2.5rem' }}>
        
        {/* SECTION 1: Basic Information */}
        <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--success)' }}>
          1. Basic & Academic Details
        </h3>
        
        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input 
              type="text" 
              name="studentName"
              value={formData.studentName} 
              onChange={handleChange}
              className="form-control"
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Branch *</label>
            <select name="branch" value={formData.branch} onChange={handleChange} className="form-control">
              <option value="CSE / AI-DS">CSE / AI-DS</option>
              <option value="CE">CE</option>
              <option value="EXTC">EXTC</option>
              <option value="IT">IT</option>
            </select>
          </div>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Placed Company Name *</label>
            <input 
              type="text" 
              name="company"
              placeholder="e.g. Microsoft"
              value={formData.company} 
              onChange={handleChange}
              className="form-control"
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Job Role *</label>
            <input 
              type="text" 
              name="jobRole"
              placeholder="e.g. Software Engineer"
              value={formData.jobRole} 
              onChange={handleChange}
              className="form-control"
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">CGPA *</label>
            <input 
              type="number" 
              step="0.01"
              name="cgpa"
              placeholder="e.g. 9.1"
              value={formData.cgpa} 
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Batch (e.g. 2022-2026) *</label>
            <input 
              type="text" 
              name="batch"
              value={formData.batch} 
              onChange={handleChange}
              className="form-control"
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Pass-out Year *</label>
            <input 
              type="number" 
              name="passoutYear"
              value={formData.passoutYear} 
              onChange={handleChange}
              className="form-control"
              required 
            />
          </div>
        </div>

        {/* SECTION 2: 4-Year Journey */}
        <h3 style={{ fontSize: '1.15rem', marginTop: '2.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--success)' }}>
          2. Four-Year Engineering Journey
        </h3>

        <div className="form-group">
          <label className="form-label">First Year Journey: Where did you start? *</label>
          <textarea 
            name="firstYear"
            value={formData.firstYear} 
            onChange={handleChange}
            placeholder="e.g. Explored languages, adapted to college life, participated in local hackathons..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Second Year Journey: Core CS & DSA foundation *</label>
          <textarea 
            name="secondYear"
            value={formData.secondYear} 
            onChange={handleChange}
            placeholder="e.g. Started DSA in Java/C++, mastered Object-Oriented concepts..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Third Year Journey: Hackathons, Internships & Projects *</label>
          <textarea 
            name="thirdYear"
            value={formData.thirdYear} 
            onChange={handleChange}
            placeholder="e.g. Internships secured, hackathon victories, high-level system design..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Fourth Year Journey: Placement selection drives *</label>
          <textarea 
            name="fourthYear"
            value={formData.fourthYear} 
            onChange={handleChange}
            placeholder="e.g. Appeared for recruitment drives, cleared technical & manager rounds..."
            className="form-control"
            required
          />
        </div>

        {/* SECTION 3: Preparation Strategy */}
        <h3 style={{ fontSize: '1.15rem', marginTop: '2.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--success)' }}>
          3. Preparation Strategy Breakdown
        </h3>

        <div className="form-group">
          <label className="form-label">A. Data Structures & Algorithms (DSA) Strategy *</label>
          <textarea 
            name="dsaPrep"
            value={formData.dsaPrep} 
            onChange={handleChange}
            placeholder="e.g. Sheets followed, LeetCode problem counts, key topics focused on..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">B. Core CS Subjects (DBMS, OS, CN) *</label>
          <textarea 
            name="coreCsPrep"
            value={formData.coreCsPrep} 
            onChange={handleChange}
            placeholder="e.g. SQL normalization rules, OS thread locks, networking TCP handshakes..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">C. Projects & Portfolio Highlights</label>
          <textarea 
            name="projectsPrep"
            value={formData.projectsPrep} 
            onChange={handleChange}
            placeholder="e.g. Tech stack used, key challenges solved during project implementation..."
            className="form-control"
          />
        </div>

        {/* SECTION 4: Interview Experience */}
        <h3 style={{ fontSize: '1.15rem', marginTop: '2.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--success)' }}>
          4. Detailed Interview Experience
        </h3>

        <div className="form-group">
          <label className="form-label">Online Assessment (OA) Details *</label>
          <textarea 
            name="onlineAssessment"
            value={formData.onlineAssessment} 
            onChange={handleChange}
            placeholder="e.g. Number of coding questions, difficulty level, test duration..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Technical Interview Rounds *</label>
          <textarea 
            name="technicalRounds"
            value={formData.technicalRounds} 
            onChange={handleChange}
            placeholder="e.g. Live coding questions, system architecture queries, dry run tests..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">HR / Behavioral Round</label>
          <textarea 
            name="hrRound"
            value={formData.hrRound} 
            onChange={handleChange}
            placeholder="e.g. Behavioral questions, project role questions, company values..."
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Important Topics & Frequently Asked Questions</label>
          <input 
            type="text"
            name="keyTopics"
            value={formData.keyTopics}
            onChange={handleChange}
            placeholder="e.g. Trees, Graphs, Concurrency, SQL Joins, System Design"
            className="form-control"
          />
        </div>

        {/* SECTION 5: Advice to Juniors */}
        <h3 style={{ fontSize: '1.15rem', marginTop: '2.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--success)' }}>
          5. Advice to Juniors
        </h3>

        <div className="form-group">
          <label className="form-label">Personal Advice & Core Takeaways *</label>
          <textarea 
            name="advice"
            value={formData.advice} 
            onChange={handleChange}
            placeholder="e.g. Advice on consistency, CGPA maintenance, and interview mindset..."
            className="form-control"
            required
          />
        </div>

        {/* SECTION 6: Resume Upload */}
        <h3 style={{ fontSize: '1.15rem', marginTop: '2.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--success)' }}>
          6. Resume & Attachments
        </h3>

        <div className="form-group">
          <label className="form-label">Upload Resume (PDF format, max 5MB)</label>
          <div style={{
            border: '2px dashed var(--border-color)',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: 'rgba(255,255,255,0.01)',
            position: 'relative'
          }}>
            <input 
              type="file" 
              accept=".pdf"
              onChange={handleFileChange}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer'
              }}
            />
            <UploadCloud size={28} style={{ color: 'var(--success)', marginBottom: '0.5rem' }} />
            <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              {formData.resumeName ? `Attached File: ${formData.resumeName}` : "Click to browse or drag and drop your placement resume (PDF)"}
            </p>
            {uploading && (
              <div style={{ marginTop: '0.75rem', width: '80%', margin: '0.75rem auto 0 auto' }}>
                <div style={{
                  height: '4px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${uploadProgress}%`,
                    height: '100%',
                    background: 'var(--success)',
                    transition: 'width 0.2s ease'
                  }}></div>
                </div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                  Uploading PDF... {uploadProgress}%
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Share Preparation Resource Links (Comma separated URLs)</label>
          <input 
            type="text" 
            name="studyLinks"
            placeholder="e.g. https://github.com/my-dsa-notes, https://example.com/prep-deck"
            value={formData.studyLinks} 
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', gap: '0.5rem', height: '48px', fontSize: '0.95rem' }}>
          <Send size={18} /> Submit Story for Administrator Review
        </button>
      </form>
    </div>
  )
}

export default SubmitStory
