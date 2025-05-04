import React from 'react';
import './PokemonDetailCard.css';

// Importar íconos de tipos
import bugIcon from '../assets/icons/svgs/bug.svg';
import darkIcon from '../assets/icons/svgs/dark.svg';
import dragonIcon from '../assets/icons/svgs/dragon.svg';
import electricIcon from '../assets/icons/svgs/electric.svg';
import fairyIcon from '../assets/icons/svgs/fairy.svg';
import fightingIcon from '../assets/icons/svgs/fighting.svg';
import fireIcon from '../assets/icons/svgs/fire.svg';
import flyingIcon from '../assets/icons/svgs/flying.svg';
import ghostIcon from '../assets/icons/svgs/ghost.svg';
import grassIcon from '../assets/icons/svgs/grass.svg';
import groundIcon from '../assets/icons/svgs/ground.svg';
import iceIcon from '../assets/icons/svgs/ice.svg';
import normalIcon from '../assets/icons/svgs/normal.svg';
import poisonIcon from '../assets/icons/svgs/poison.svg';
import psychicIcon from '../assets/icons/svgs/psychic.svg';
import rockIcon from '../assets/icons/svgs/rock.svg';
import steelIcon from '../assets/icons/svgs/steel.svg';
import waterIcon from '../assets/icons/svgs/water.svg';
import heightIcon from '../assets/icons/svgs/height_.svg';
import weightIcon from '../assets/icons/svgs/weight_.svg';

const typeIcons = {
  bug: bugIcon,
  dark: darkIcon,
  dragon: dragonIcon,
  electric: electricIcon,
  fairy: fairyIcon,
  fighting: fightingIcon,
  fire: fireIcon,
  flying: flyingIcon,
  ghost: ghostIcon,
  grass: grassIcon,
  ground: groundIcon,
  ice: iceIcon,
  normal: normalIcon,
  poison: poisonIcon,
  psychic: psychicIcon,
  rock: rockIcon,
  steel: steelIcon,
  water: waterIcon
};

function PokemonDetailCard({ pokemon }) {
  const convertHeight = (height) => {
    // height viene en decímetros, convertir a metros
    return (height / 10).toFixed(2);
  };

  const convertWeight = (weight) => {
    // weight viene en hectogramos, convertir a kilogramos
    return (weight / 10).toFixed(1);
  };

  return (
    <div className="pokemon-detail-card">
      <h2 className="pokemon-name">{pokemon.name}</h2>
      
      <div className="sprites-container">
        <div className="sprite-box">
          <img src={pokemon.frontSprite} alt={`${pokemon.name} front view`} />
        </div>
        <div className="sprite-box">
          <img src={pokemon.backSprite} alt={`${pokemon.name} back view`} />
        </div>
      </div>

      <div className="stats-container">
        <div className="stat">
          <img src={heightIcon} alt="Height" className="stat-icon" />
          <span className="stat-value">{convertHeight(pokemon.height)} m</span>
        </div>
        <div className="stat">
          <img src={weightIcon} alt="Weight" className="stat-icon" />
          <span className="stat-value">{convertWeight(pokemon.weight)} kg</span>
        </div>
      </div>

      <div className="types-container">
        <h3>Types</h3>
        <div className="type-list">
          {pokemon.types.map((type, index) => (
            <div key={index} className="type-item">
              <div className="type-icon-container">
                <img 
                  src={typeIcons[type.toLowerCase()]} 
                  alt={type} 
                  className="type-icon"
                />
              </div>
              <span className="type-label">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailCard;