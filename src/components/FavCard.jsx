import React from 'react';
import { Link } from 'react-router-dom';

const FavCard = ({ drink }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
      <p style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>{drink.strDrink}</p>
      <Link to={`/details/${drink.idDrink}`}>Saiba mais</Link>
    </div>
  );
};

export default FavCard;
