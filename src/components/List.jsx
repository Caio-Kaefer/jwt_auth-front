import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DrinkCard from './DrinkCard';
import Grid from '@mui/material/Grid';

function List() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin")
      .then((response) => {
        setApiData(response.data.drinks);
      })
      .catch((error) => {
        console.error("Erro ao obter dados", error);
      });
  }, []);

  return (
    <div>
      <h1>Drinks com Gin</h1>
      <Grid container spacing={2}>
        {apiData.map((drink, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <DrinkCard drink={drink} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List;
