import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AquaFlow Tankers</h3>
            <p>Your trusted partner for clean and reliable water supply services in Bengaluru. Quality water delivered with professionalism and care.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('areas')}>Service Areas</button></li>
              <li><button onClick={() => scrollToSection('pricing')}>Pricing</button></li>
              <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Residential Water Supply</li>
              <li>Commercial Water Delivery</li>
              <li>Emergency Water Service</li>
              <li>Bulk Water Supply</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 +91 98765 43210</p>
            <p>📧 info@aquaflowtankers.com</p>
            <p>📍 Whitefield, Bengaluru</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AquaFlow Tankers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer