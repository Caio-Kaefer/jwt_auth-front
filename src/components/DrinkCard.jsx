import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function DrinkCard({ drink }) {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const userId = decoded.id;
  const [clicked, setClicked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleFavorite = async (id) => {
    try {
      const response = await axios.post(
        "https://localhost:7062/api/Favorite/addfavorite",
        {
          userId: userId,
          drinkId: id,
        }
      );
      // Se a requisição for bem-sucedida, atualize o estado do ícone
      setClicked(!clicked);
    } catch (error) {
      console.error("Erro ao adicionar aos favoritos:", error);
      if (error.response && error.response.status === 400) {
        // Se for um erro de bad request (status 400), exibe o diálogo com a mensagem de erro
        setDialogContent("Este drink já está marcado como favorito.");
        setOpenDialog(true);
      }
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div style={{ margin: "10px" }}>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={drink.strDrinkThumb}
          title={drink.strDrink}
        />
        <CardContent style={{ paddingBottom: "16px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {drink.strDrink}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {drink.strInstructions}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            paddingTop: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to={`/details/${drink.idDrink}`}>Saiba mais</Link>
          <Button onClick={() => handleFavorite(drink.idDrink)}>
            Adicionar aos Favoritos
          </Button>
        </CardActions>
      </Card>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DrinkCard;
