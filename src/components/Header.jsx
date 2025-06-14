import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <h2>AquaFlow Tankers</h2>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('areas')}>Service Areas</button></li>
            {/* <li><button onClick={() => scrollToSection('pricing')}>Pricing</button></li> */}
            <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </nav>
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header