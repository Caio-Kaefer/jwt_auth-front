import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DrinkDetails() {
  const { id } = useParams();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setApiData(response.data.drinks[0]);
      })
      .catch((error) => {
        console.error("Erro ao obter dados", error);
      });
  }, [id]);

  if (!apiData) {
    return <div>Loading...</div>;
  }

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  } = apiData;

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  ].filter(Boolean);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{strDrink}</h1>
      <img src={strDrinkThumb} alt="Drink" style={{ width: '500px', borderRadius: '8px' }} />
      <p><strong>Category:</strong> {strCategory}</p>
      <p><strong>Type:</strong> {strAlcoholic === 'Alcoholic' ? 'Alcoholic' : 'Non-Alcoholic'}</p>
      <p><strong>Glass:</strong> {strGlass}</p>
      <p><strong>Instructions:</strong> {strInstructions}</p>
      <div style={{ marginTop: '20px' }}>
        <h3>Ingredients:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DrinkDetails;
