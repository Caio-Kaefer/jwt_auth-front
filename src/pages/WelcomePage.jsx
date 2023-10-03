
import { useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import * as React from 'react';
import List from '../components/List';


function WelcomePage() {
  const token  = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  const name = decoded.nome;
  return (
    <div>
      <h1>Bem-vindo! {name}</h1>
      <List/>
      
    </div>
  );
}

export default WelcomePage;
