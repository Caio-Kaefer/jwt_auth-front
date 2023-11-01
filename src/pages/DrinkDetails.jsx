import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DrinkDetails() {
  const { id } = useParams();
  const [apiData, setApiData] = useState([]);

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

  return (
    <div>
       <h1>{apiData.strDrink}</h1>
       <img src={apiData.strDrinkThumb} alt="Drink Image" />
       <p>Category: {apiData.strCategory}</p>
       {apiData.strAlcoholic == "Alcoholic" ? <p>Alcoholic</p> : <p>Not Alcoholic</p>}
       <p>Instructions: {apiData.strInstructions}</p>
    </div>
  );
}

export default DrinkDetails;
