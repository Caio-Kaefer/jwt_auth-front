import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FavCard = ({ drink, id }) => {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleClick = async (DrinkId, Id) => {
    try {
      await axios.delete(`https://localhost:7062/api/Favorite/deletefavorite?DrinkId=${DrinkId}&id=${Id}`);
      // After successful deletion, hide the card
      setIsCardVisible(false);
    } catch (error) {
      console.error('Erro ao excluir favorito:', error);
    }
  };

  if (!isCardVisible) {
    return null; // If card is not visible, return null to render nothing
  }

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
      <p style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>{drink.strDrink}</p>
      <Link to={`/details/${drink.idDrink}`}>more info</Link>
      <button
        onClick={async () => {
          try {
            await handleClick(drink.idDrink, id);
          } catch (error) {
            console.error('Erro ao excluir favorito:', error);
          }
        }}
        style={{
          backgroundColor: '#ff0000',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 12px',
          cursor: 'pointer',
          marginTop: '8px',
          fontSize: '14px',
          fontWeight: 'bold',
          outline: 'none',
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default FavCard;
