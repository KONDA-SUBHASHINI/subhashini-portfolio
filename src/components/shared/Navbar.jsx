import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',           id: 'about' },
  { label: 'Experience',      id: 'experience' },
  { label: 'Projects',        id: 'projects' },
  { label: 'Hackathons',      id: 'hackathons' },
  { label: 'Skills',          id: 'skills' },
  { label: 'Certifications',  id: 'certifications' },
  { label: 'Sports',          id: 'sports' },
  { label: 'Contact',         id: 'contact' },
]

function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('about')

  // background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActive(link.id)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position:       'fixed',
      top:            0,
      left:           0,
      right:          0,
      zIndex:         100,
      height:         '80px',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      padding:        '0 clamp(1rem, 5vw, 4rem)',
      background:     scrolled ? 'rgba(8,13,30,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)'          : 'none',
      borderBottom:   scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      transition:     'all 0.3s ease',
    }}>

       {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginTop: '1.3rem' }}>
        <span style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--accent)',
          fontSize: '3rem',
          fontWeight: 2000,
        }}>K</span>
        <span style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--accent-2)',
          fontSize: '3rem',
          fontWeight: 700,
        }}>S</span>
      </div>
      {/* Desktop Links */}
      <div style={{
        display:  'flex',
        gap:      '1.5rem',
        flexWrap: 'wrap',
        marginRight: '1.8rem',   
        marginTop: '1.8rem', 
      }}>
        {navLinks.map(link => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            style={{
              background:    'none',
              border:        'none',
              fontFamily: 'var(--font-main)',
              fontStyle: 'normal',
              fontSize: '0.9rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color:         active === link.id ? 'var(--accent)' : 'var(--text-muted)',
              borderBottom:  active === link.id ? '1px solid var(--accent)' : '1px solid transparent',
              paddingBottom: '2px',
              transition:    'color 0.2s',
              cursor:        'pointer',
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

    </nav>
  )
}

export default Navbar