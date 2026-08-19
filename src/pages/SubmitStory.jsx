import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, Send, ShieldAlert, FileText, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function SubmitStory({ onSubmit, currentUser }) {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)

  // Form states mapping directly to storytelling questions
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
    preparation: '',
    interview: '',
    howISecured: '',
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
      setFormData({
        ...formData,
        resumeName: e.target.files[0].name
      })
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
      journey: {
        firstYear: formData.firstYear,
        secondYear: formData.secondYear,
        thirdYear: formData.thirdYear,
        fourthYear: formData.fourthYear
      },
      strategy: {
        preparation: formData.preparation,
        interview: formData.interview,
        howISecured: formData.howISecured,
        advice: formData.advice
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
    }, 2000)
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
        gap: '1rem'
      }}>
        <div style={{ color: 'var(--success)' }}>
          <CheckCircle2 size={64} />
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Story Submitted Successfully</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
          Your profile and placement journey has been sent to the administrator review queue. Redirecting you to your profile page...
        </p>
      </div>
    )
  }

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '850px' }}>
      <SectionHeader 
        label="Share Your Journey"
        title="Submit Your Story" 
        subtitle="Translate your study methods, schedules, and interview questions into a helpful guide for your junior peers."
      />

      {/* Moderation queue reminder banner */}
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
        <ShieldAlert size={20} style={{ color: 'var(--warning)', flexShrink: 0 }} />
        <div>
          <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>Review Moderation Notice</strong>
          To prevent false placement claims and maintain data integrity, your submission will undergo review by the administrator before publishing.
        </div>
      </div>

      <form onSubmit={handleSubmit} className="editorial-card" style={{ padding: '2.5rem' }}>
        {/* Academic Details row */}
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          1. Basic Details
        </h3>
        
        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Full Name</label>
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
            <label className="form-label">Branch</label>
            <select name="branch" value={formData.branch} onChange={handleChange} className="form-control">
              <option value="CSE / AI-DS">CSE / AI-DS</option>
              <option value="CE">CE</option>
              <option value="EXTC">EXTC</option>
            </select>
          </div>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Company Name</label>
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
            <label className="form-label">Job Role</label>
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
            <label className="form-label">CGPA</label>
            <input 
              type="number" 
              step="0.01"
              name="cgpa"
              placeholder="e.g. 9.1"
              value={formData.cgpa} 
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Batch (e.g. 2022-2026)</label>
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
            <label className="form-label">Pass-out Year</label>
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

        {/* Story Prompts block */}
        <h3 style={{ fontSize: '1.1rem', marginTop: '2.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          2. Chronological Lifecycle Prompts
        </h3>

        <div className="form-group">
          <label className="form-label">First Year Journey: Where did you start?</label>
          <textarea 
            name="firstYear"
            value={formData.firstYear} 
            onChange={handleChange}
            placeholder="e.g. Explored languages, joined societies..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Second Year Journey: What changed during your second year?</label>
          <textarea 
            name="secondYear"
            value={formData.secondYear} 
            onChange={handleChange}
            placeholder="e.g. Started DSA, completed core projects..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Third Year Journey: Designing the strategy</label>
          <textarea 
            name="thirdYear"
            value={formData.thirdYear} 
            onChange={handleChange}
            placeholder="e.g. Internships, hackathons, coding contests..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Fourth Year Journey: The selection experience</label>
          <textarea 
            name="fourthYear"
            value={formData.fourthYear} 
            onChange={handleChange}
            placeholder="e.g. Selection drive rounds and manager assessments..."
            className="form-control"
            required
          />
        </div>

        {/* Prep strategy block */}
        <h3 style={{ fontSize: '1.1rem', marginTop: '2.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          3. Preparation Strategy & Interview Advice
        </h3>

        <div className="form-group">
          <label className="form-label">Preparation Strategy: How did you structure your studies?</label>
          <textarea 
            name="preparation"
            value={formData.preparation} 
            onChange={handleChange}
            placeholder="e.g. Specific courses, DSA questions solved, system design sheets..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Interview Experience: Details of the interview rounds</label>
          <textarea 
            name="interview"
            value={formData.interview} 
            onChange={handleChange}
            placeholder="e.g. Round 1 coding questions, Round 2 architecture queries..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">How I Secured My Placement: The final feedback loops</label>
          <textarea 
            name="howISecured"
            value={formData.howISecured} 
            onChange={handleChange}
            placeholder="e.g. Cutoff list qualifications, PPO conversion tips..."
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Advice to Juniors: Your core takeaways</label>
          <textarea 
            name="advice"
            value={formData.advice} 
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Files block */}
        <h3 style={{ fontSize: '1.1rem', marginTop: '2.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          4. Attachments (Mock)
        </h3>

        <div className="form-group">
          <label className="form-label">Upload Resume (PDF format, max 5MB)</label>
          <div style={{
            border: '2px dashed var(--border-color)',
            padding: '2rem',
            borderRadius: '6px',
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
            <FileText size={24} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }} />
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {formData.resumeName ? `Selected: ${formData.resumeName}` : "Click to select or drag and drop your placement resume"}
            </p>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Share Preparation Links (Comma separated URLs)</label>
          <input 
            type="text" 
            name="studyLinks"
            placeholder="e.g. https://github.com/my-dsa, https://example.com/prep-deck"
            value={formData.studyLinks} 
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', gap: '0.5rem', height: '48px' }}>
          <Send size={16} /> Submit Placement Story
        </button>
      </form>
    </div>
  )
}

export default SubmitStory
