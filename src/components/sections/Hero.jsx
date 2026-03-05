import { hero } from '../../data/portfolioData'
import { useEffect, useRef } from 'react'

import profileImg from '../../assets/subhapic.png'

function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.4 + 0.1,
    }))

    let animId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${p.o})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 clamp(1.5rem, 8vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }} />

      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '700px',
        width: '100%',
        paddingTop: '60px',
        gap: '0.2rem',
      }}>

        {/* Photo */}
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid rgba(56,189,248,0.25)',
          marginBottom: '1.5rem',
          marginTop: '1rem',
          boxShadow: '0 0 20px rgba(56,189,248,0.1)',
          flexShrink: 0,
        }}>
          <img src={profileImg} alt="Konda Subhashini" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Tagline replacing HELLO I AM */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent)',
            fontSize: '0.78rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>Engineer · Builder · Innovator</span>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: 'var(--text)',
          marginBottom: '0.5rem',
        }}>
          Konda Subhashini
        </h1>

        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          color: 'var(--accent-2)',
          fontWeight: 400,
          marginBottom: '1.2rem',
          letterSpacing: '0.04em',
        }}>
          {hero.title}
        </h2>

        {/* Bio */}
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          lineHeight: 1.75,
          maxWidth: '520px',
          marginBottom: '1.8rem',
        }}>
          {hero.tagline}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.8rem' }}>
          
            <a href={'mailto:' + hero.email}
            style={{
              padding: '0.7rem 1.8rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              textDecoration: 'none',
              background: 'rgba(56,189,248,0.12)',
              color: 'var(--accent)',
              border: '1px solid rgba(56,189,248,0.4)',
            }}
          >
            Get in Touch
          </a>
          
            <a href="#projects"
            style={{
              padding: '0.7rem 1.8rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              textDecoration: 'none',
              background: 'transparent',
              color: 'var(--text-muted)',
              border: '1px solid rgba(148,163,184,0.4)',
            }}
          >
            View Projects
          </a>
        </div>

        {/* Social Links with icons */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
          
          <a href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          
          <a  href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            📍 {hero.location}
          </span>
        </div>

      </div>
    </section>
  )
}

export default Hero