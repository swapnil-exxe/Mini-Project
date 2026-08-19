import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Download, Printer, FileText, CheckCircle2 } from 'lucide-react'

function ResumeViewer({ stories, pendingStories }) {
  const { id } = useParams()

  const story = stories.find(s => s.id === id) || pendingStories.find(s => s.id === id)

  if (!story) {
    return (
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Resume Not Found</h2>
        <p style={{ color: 'var(--text-secondary)' }}>We couldn't locate a resume corresponding to this student ID.</p>
        <Link to="/stories" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>
          Back to Stories
        </Link>
      </div>
    )
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    alert("Simulating PDF download... In Phase 2, this will retrieve the verified PDF file from AWS S3 storage.")
  }

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      {/* Back link */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <Link to={`/stories/${story.id}`} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem'
        }}>
          <ArrowLeft size={16} /> Back to Senior Profile
        </Link>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={handlePrint} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            <Printer size={15} /> Print
          </button>
          <button onClick={handleDownload} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            <Download size={15} /> Download Resume
          </button>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '2.5rem'
      }} className="grid-2">
        
        {/* Document Stats Info */}
        <div>
          <div className="editorial-card" style={{ position: 'sticky', top: '100px' }}>
            <span className="label-caps" style={{ color: 'var(--success)' }}>Verified Document</span>
            <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>{story.studentName}'s CV</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              This resume has been reviewed and cleared the CGPA and screening criteria for <strong>{story.company}</strong> ({story.jobRole}).
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)'
            }}>
              <CheckCircle2 size={14} style={{ color: 'var(--success)' }} />
              <span>Verified Placement Record</span>
            </div>
          </div>
        </div>

        {/* High-Fidelity Styled Resume Layout (A4 styled card representation) */}
        <div style={{
          backgroundColor: '#ffffff',
          color: '#111827',
          padding: '3.5rem',
          borderRadius: '8px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
          maxWidth: '800px',
          margin: '0 auto',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }} className="resume-sheet-printable">
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #111827', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <h1 style={{ color: '#111827', fontSize: '2.25rem', fontWeight: 700, margin: 0 }}>{story.studentName}</h1>
            <p style={{ color: '#4b5563', margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
              {story.branch} Student &bull; Class of {story.passoutYear} &bull; GPA: {story.cgpa ? `${story.cgpa}/10.0` : 'N/A'}
            </p>
            <p style={{ color: '#6b7280', margin: '0.15rem 0 0 0', fontSize: '0.8rem' }}>
              college-email@college.edu &bull; Mumbai, India
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#111827', borderBottom: '1px solid #e5e7eb', fontSize: '1.1rem', paddingBottom: '0.25rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <strong style={{ fontSize: '0.95rem' }}>Bachelor of Technology (B.Tech) in {story.branch.split('/')[0]}</strong>
              <span style={{ fontSize: '0.9rem', color: '#4b5563' }}>{story.batch}</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#4b5563' }}>Academic Institution University (CGPA: {story.cgpa ? `${story.cgpa}/10.0` : 'N/A'})</p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#111827', borderBottom: '1px solid #e5e7eb', fontSize: '1.1rem', paddingBottom: '0.25rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Professional Experience</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '0.95rem' }}>{story.jobRole} Intern &bull; {story.company}</strong>
                <span style={{ fontSize: '0.9rem', color: '#4b5563' }}>Summer 2025</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#374151', lineHeight: '1.5' }}>
                <li>Engineered core API microservices handling key product configurations.</li>
                <li>Collaborated with design team to draft and launch modular frontend screens, boosting user retention metrics by 15%.</li>
                <li>Automated integration testing pipelines using mock test runners, decreasing deployment errors by 30%.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#111827', borderBottom: '1px solid #e5e7eb', fontSize: '1.1rem', paddingBottom: '0.25rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects</h3>
            <div style={{ marginBottom: '0.75rem' }}>
              <strong style={{ fontSize: '0.95rem' }}>LOOP Portal Frontend Platform</strong>
              <ul style={{ margin: '0.25rem 0 0 0', paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#374151', lineHeight: '1.5' }}>
                <li>Designed a responsive React web client mimicking a clean storytelling UI.</li>
                <li>Developed interactive search filters that reduce record retrieval latencies.</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 style={{ color: '#111827', borderBottom: '1px solid #e5e7eb', fontSize: '1.1rem', paddingBottom: '0.25rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Technical Skills</h3>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#374151', lineHeight: '1.5' }}>
              <strong>Programming Languages:</strong> Java, Python, JavaScript (ES6+), C++, SQL <br />
              <strong>Web Technologies:</strong> React, Node.js, Express, HTML5, CSS3, REST APIs <br />
              <strong>Databases & Tools:</strong> MongoDB, MySQL, Git, Docker, AWS S3
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .resume-sheet-printable, .resume-sheet-printable * {
            visibility: visible;
          }
          .resume-sheet-printable {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ResumeViewer
