import React from 'react';
import { useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function Welcome() {
  const { token } = useParams();
  const decoded = jwt_decode(token);
  const name = decoded.nome;
  return (
    <div>
      <h1>Bem-vindo! {name}</h1>
      
    </div>
  );
}

export default Welcome;
