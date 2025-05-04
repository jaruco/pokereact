import React from 'react';
import './Carousel.css';

function Carousel({ items }) {
  const adjustedItems = items.slice(0, 12);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {adjustedItems.map((item) => (
          <div
            key={item.id}
            className="carousel-card"
          >
            <h3>{item.name}</h3>
            <img 
              src={item.officialArtwork} 
              alt={`${item.name}`}
              onError={(e) => {
                console.error('Error loading image:', item.officialArtwork);
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;