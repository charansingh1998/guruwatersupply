import React from 'react'

const ServiceAreas = () => {
  const areas = [
    {
      title: 'North Bengaluru',
      locations: ['Yelahanka', 'Hebbal', 'RT Nagar', 'Sadashivanagar', 'Mathikere']
    },
    {
      title: 'South Bengaluru',
      locations: ['Koramangala', 'BTM Layout', 'Jayanagar', 'JP Nagar', 'Banashankari']
    },
    {
      title: 'East Bengaluru',
      locations: ['Whitefield', 'Marathahalli', 'Indiranagar', 'CV Raman Nagar', 'Banaswadi']
    }
  ]

  return (
    <section id="areas" className="service-areas">
      <div className="container">
        <h2>Areas We Serve</h2>
        <p className="section-subtitle">Comprehensive water supply coverage across Bengaluru</p>
        <div className="areas-grid">
          {areas.map((area, index) => (
            <div key={index} className="area-card">
              <h3>{area.title}</h3>
              <ul>
                {area.locations.map((location, locationIndex) => (
                  <li key={locationIndex}>{location}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas