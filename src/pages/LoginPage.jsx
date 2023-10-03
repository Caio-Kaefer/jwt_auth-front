import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from "react-router-dom";

function LoginPage() {
  const [token, setToken] = useState()
  
  return (
    <>
    <LoginForm/>
    
    <p>não tem uma conta?</p>
    <Link to={"/signup"}>cadastre-se agora!</Link>
    </>
  
  )
}

export default LoginPage