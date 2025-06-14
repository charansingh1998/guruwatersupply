import React, { useState, useEffect, createContext } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ServiceAreas from './components/ServiceAreas'
// import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Clients from './components/Clients'

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <ServiceAreas />
        {/* <Pricing /> */}
        <Clients />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App