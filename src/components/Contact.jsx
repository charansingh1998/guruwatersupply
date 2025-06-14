import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109']
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['info@aquaflowtankers.com', 'booking@aquaflowtankers.com']
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Tank Road, Whitefield', 'Bengaluru - 560066']
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      details: ['24/7 Emergency Service', 'Office: 8:00 AM - 8:00 PM']
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{info.icon}</div>
                <div>
                  <h3>{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="basic">Basic - 3000L</option>
                  <option value="premium">Premium - 5000L</option>
                  <option value="bulk">Bulk - 10000L</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message / Special Requirements"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact