import React, { useState, useRef } from 'react';
import './Carousel.css';
import PokemonDetailCard from './PokemonDetailCard';

function Carousel({ items = [] }) {
  const adjustedItems = Array.isArray(items) ? items.slice(0, 12) : [];
  const [rotation, setRotation] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    
    const distanceFromCenter = mouseX - centerX;
    const rotationSpeed = distanceFromCenter / rect.width * 0.8;
    
    setRotation(prev => prev + rotationSpeed);
  };

  const handleMouseLeave = () => {
    setRotation(rotation);
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="carousel-wrapper">
      <div 
        className="carousel"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        <div 
          className="carousel-container"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {adjustedItems.map((item) => (
            <div
              key={item.id}
              className="carousel-card"
              onClick={() => handleCardClick(item)}
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
      
      {selectedPokemon && (
        <div className="detail-modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setSelectedPokemon(null)}>×</button>
            <PokemonDetailCard pokemon={selectedPokemon} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;