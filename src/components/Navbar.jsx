'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="logo-icon">
        <h1>Kr1ss</h1>
      </div>
      <button 
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={menuOpen ? 'active' : ''}>
        <li><a href="#tentang" onClick={() => setMenuOpen(false)}>Tentang</a></li>
        <li><a href="#heroes" onClick={() => setMenuOpen(false)}>Hero</a></li>
        <li><a href="#kontak" onClick={() => setMenuOpen(false)}>Kontak</a></li>
      </ul>
    </nav>
  )
}