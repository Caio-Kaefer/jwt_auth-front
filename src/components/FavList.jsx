import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavCard from './FavCard';

const FavoriteList = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoritesWithData, setFavoritesWithData] = useState([]);
  
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`https://localhost:7062/api/Favorite/getfavorite?id=${userId}`);
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    if (userId) {
      fetchFavorites();
    }
  }, [userId]);

  useEffect(() => {
    const fetchDataForFavorites = async () => {
      const fetchDataPromises = favorites.map(async (favorite) => {
        try {
          const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${favorite.drinkId}`);
          const drinkData = response.data.drinks ? response.data.drinks[0] : null;
          return { ...favorite, drinkData };
        } catch (error) {
          console.error(`Error fetching data for drinkId ${favorite.drinkId}:`, error);
          return { ...favorite, drinkData: null };
        }
      });

      try {
        const resolvedFavoritesWithData = await Promise.all(fetchDataPromises);
        setFavoritesWithData(resolvedFavoritesWithData.filter(favorite => favorite.drinkData)); // Filter out favorites without drink data
      } catch (error) {
        console.error('Error resolving data for favorites:', error);
      }
    };

    if (favorites.length > 0) {
      fetchDataForFavorites();
    }
  }, [favorites]);

  return (
    <div>
      <h2>Favorites List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {favoritesWithData.map((favorite) => (
          <div key={favorite.id}>
            <FavCard drink={favorite.drinkData} id={userId}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
