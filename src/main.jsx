import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/loginPage';
import Welcome from './pages/Welcome';
import SignUpPage from './pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/welcome/:token",
    element: <Welcome/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
]);
const theme = createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
