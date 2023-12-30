import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./DrinkCard.css"; 
import { Dialog, DialogContent, DialogActions } from "@mui/material";

function DrinkCard({ drink }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleFavorite = async (id) => {
    try {
      
      if (id % 2 === 0) {
        setDialogContent("Este drink já está marcado como favorito.");
        setOpenDialog(true);
      } else {
        setDialogContent("Drink adicionado aos favoritos!");
        setOpenDialog(true);
      }
    } catch (error) {
      console.error("Erro ao adicionar aos favoritos:", error);
      setDialogContent("Erro ao adicionar aos favoritos.");
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="drink-card">
      <Card>
        <CardContent>
          <img
            className="drink-image"
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
          <Typography gutterBottom variant="h5" component="div">
            {drink.strDrink}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {drink.strInstructions}
          </Typography>
          <Button onClick={() => handleFavorite(drink.idDrink)}>
            Adicionar aos Favoritos
          </Button>
        </CardContent>
      </Card>
      <div>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogContent>{dialogContent}</DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} autoFocus>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default DrinkCard;
