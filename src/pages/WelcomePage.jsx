import { useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import * as React from 'react';
import List from '../components/List';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; 

function WelcomePage() {
  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  const name = decoded.nome;
  const age = decoded.age;

  return (
    <div className="welcome-page">
      <h1>Welcome {name}</h1>
      <Link to="/favorites">Acessar Favoritos</Link>
      <div>
        {age >= 18 ? (
          <List />
        ) : (
          <p>You must be 18 or older to access the page</p>
        )}
      </div>
    </div>
  );
}

export default WelcomePage;
