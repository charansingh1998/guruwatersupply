import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="container">
          <h1>Premium Water Supply Services in Bengaluru</h1>
          <p>Reliable, clean, and affordable water delivery to your doorstep. Serving Bengaluru with quality water tanker services since 2015.</p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Book Now</button>
            <button onClick={() => scrollToSection('pricing')} className="btn btn-secondary">View Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.pexels.com/photos/1446794/pexels-photo-1446794.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Water Tanker Service" />
      </div>
    </section>
  )
}

export default Hero