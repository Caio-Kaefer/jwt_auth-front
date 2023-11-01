import axios from "axios";
import React, { useEffect, useState } from "react";
import DrinkCard from "./DrinkCard";
import Grid from "@mui/material/Grid";

function List() {
  const [apiData, setApiData] = useState([]);
  const [ingredient, setIngredient] = useState("gin"); // Defina um valor padrão para o ingrediente

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )
      .then((response) => {
        setApiData(response.data.drinks);
      })
      .catch((error) => {
        console.error("Erro ao obter dados", error);
      });
  }, [ingredient]);

  const changeIngredient = (newIngredient) => {
    setIngredient(newIngredient);
  };

  return (
    <div>
      <h1>
        Drinks with {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
      </h1>
      <p>Select the ingredient</p>
      <button onClick={() => changeIngredient("gin")}>Gin</button>
      <button onClick={() => changeIngredient("vodka")}>Vodka</button>
      <Grid container spacing={2}>
        {apiData.map((drink, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
            <DrinkCard drink={drink} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List;
