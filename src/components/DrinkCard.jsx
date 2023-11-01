import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function DrinkCard({ drink }) { // Use destructuring to access the `drink` prop
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
            {drink.strDrink}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`details/${drink.idDrink}`}>Saiba mais </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default DrinkCard;
