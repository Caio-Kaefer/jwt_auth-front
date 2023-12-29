import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavoriteList = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`https://localhost:7062/api/Favorite/getfavorite?id=${userId}`);
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [userId]);

  return (
    <div>
      <h2>Favorite List for User {userId}</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.drinkId}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
