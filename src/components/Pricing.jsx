import React from 'react'

const Pricing = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const pricingPlans = [
    {
      name: 'Basic',
      price: '₹800',
      unit: '3000 Liters',
      features: [
        'Quality tested water',
        'Same day delivery',
        'Standard tanker',
        'Basic support'
      ],
      featured: false
    },
    {
      name: 'Premium',
      price: '₹1,200',
      unit: '5000 Liters',
      features: [
        'Premium quality water',
        'Priority delivery',
        'Modern tanker',
        '24/7 support',
        'Free tank cleaning'
      ],
      featured: true
    },
    {
      name: 'Bulk',
      price: '₹2,000',
      unit: '10000 Liters',
      features: [
        'Bulk supply water',
        'Scheduled delivery',
        'Large capacity tanker',
        'Dedicated support',
        'Volume discounts'
      ],
      featured: false
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Our Pricing Plans</h2>
        <p className="section-subtitle">Transparent pricing with no hidden charges</p>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="pricing-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <div className="price-unit">{plan.unit}</div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>✓ {feature}</li>
                ))}
              </ul>
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing