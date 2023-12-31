import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

function DrinkCard({ drink }) {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const userId = decoded.id;
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
      setDialogContent("Drink adicionado aos favoritos!");
      setOpenDialog(true);
    } catch (error) {
      console.error("Erro ao adicionar aos favoritos:", error);
      if (error.response && error.response.status === 400) {
        setDialogContent("Este drink já está marcado como favorito.");
        setOpenDialog(true);
      }
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "200px" }}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} style={{ width: "100%", height: "auto", borderRadius: "8px 8px 0 0" }} />
      <div style={{ padding: "10px" }}>
        <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>{drink.strDrink}</p>
        <Link to={`/details/${drink.idDrink}`} style={{ textDecoration: "none", color: "#007bff", display: "block", marginTop: "5px", marginBottom: "10px" }}>more info</Link>
        <Button variant="contained" onClick={() => handleFavorite(drink.idDrink)} fullWidth style={{ backgroundColor: "#007bff", color: "#fff" }}>Add to Faorites</Button>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DrinkCard;
