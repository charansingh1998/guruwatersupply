import React from 'react'

const Gallery = () => {
  const galleryItems = [
    {
      image: 'https://images.pexels.com/photos/1446794/pexels-photo-1446794.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: '5000L Water Tanker',
      description: 'Modern fleet for efficient delivery'
    },
    {
      image: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Premium Tanker Service',
      description: 'Quality water delivery solutions'
    },
    {
      image: 'https://images.pexels.com/photos/1446794/pexels-photo-1446794.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Large Capacity Tanker',
      description: '10000L capacity for bulk supply'
    },
    {
      image: 'https://images.pexels.com/photos/3933996/pexels-photo-3933996.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Professional Team',
      description: 'Experienced and reliable staff'
    },
    {
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Quality Testing',
      description: 'Rigorous water quality checks'
    },
    {
      image: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: '24/7 Service',
      description: 'Round the clock availability'
    }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Our Fleet & Services</h2>
        <p className="section-subtitle">Modern tankers and professional service team</p>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery