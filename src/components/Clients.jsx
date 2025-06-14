import React from 'react'

const Clients = () => {
  const clientList = [
    {
      image: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200',
      name: 'Apartment Complexes',
      description: 'Regular water supply to residential communities'
    },
    {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200',
      name: 'Hotels & Resorts',
      description: 'Reliable service for hospitality sector'
    },
    {
      image: 'https://images.unsplash.com/photo-1562516155-e0c1ee44059b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200',
      name: 'Construction Sites',
      description: 'Bulk water supply for construction needs'
    },
  ]

  return (
    <section id="clients"  className="gallery">
      <div className="container">
        <h2>Our Clients</h2>
        <p className="section-subtitle">Trusted by businesses and communities across Bengaluru</p>
         <div className="gallery-grid">
          {clientList.map((client, index) => (
            <div key={index} className="gallery-item">
              <img src={client.image} alt={client.name} />
             <div className="gallery-overlay">
                <h3>{client.name}</h3>
                <p>{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients