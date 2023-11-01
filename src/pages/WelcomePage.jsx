
import { useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import * as React from 'react';
import List from '../components/List';


function WelcomePage() {
  const token  = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  const name = decoded.nome;
  const age = decoded.age
  console.log(age)
  return (
    <div>
      <h1>Welcome {name}</h1>
      <div>
      {age >= 18 ? (
        <List/>
      ) : (
        <p>You must be 18 or older to access the page</p>
      )}
    </div>
      
    </div>
  );
}

export default WelcomePage;
