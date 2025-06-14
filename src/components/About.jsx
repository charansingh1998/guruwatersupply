import React from 'react'

const About = () => {
  const features = [
    {
      icon: '💧',
      title: 'Pure Water',
      description: 'Quality tested water from approved sources'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and efficient delivery service'
    },
    {
      icon: '📞',
      title: '24/7 Service',
      description: 'Available round the clock for emergencies'
    }
  ]

  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Why Choose AquaFlow Tankers?</h2>
            <p>With over 8 years of experience in water supply services, we ensure the highest quality of water delivery across Bengaluru. Our modern fleet of tankers and professional team guarantee timely and reliable service.</p>
            <div className="features">
              {features.map((feature, index) => (
                <div key={index} className="feature">
                  <div className="feature-icon">{feature.icon}</div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.pexels.com/photos/3933996/pexels-photo-3933996.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional Water Service" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About