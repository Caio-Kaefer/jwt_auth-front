import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

function DrinkCard({ drink }) {
  const token = localStorage.getItem("token");

  const decoded = jwt_decode(token);
  const userId = decoded.id;

  const handleFavorite = async (id) => {
    const data = {
      userId: userId,
      drinkId: id
    };

    try {
      const response = await axios.post(
        "https://localhost:7062/api/Favorite/addfavorite",
        data
      );
    
    } catch (error) {

      console.error("Erro ao adicionar aos favoritos:", error);
    }
  };

  return (
    <div>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={drink.strDrinkThumb}
          title={drink.strDrink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drink.strDrink}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Se essa era a descrição, atualize para a propriedade correta */}
            {drink.strInstructions}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`details/${drink.idDrink}`}>Saiba mais</Link>
          <button
            className="favorite"
            onClick={() => handleFavorite(drink.idDrink)}
          >
            Adicionar aos favoritos
          </button>
        </CardActions>
      </Card>
    </div>
  );
}

export default DrinkCard;
