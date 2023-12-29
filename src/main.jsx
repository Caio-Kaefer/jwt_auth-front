import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/loginPage';
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import DrinkDetails from './pages/DrinkDetails';
import Favorites from './pages/Favorites';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/welcome",
    element: <WelcomePage/>
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  {
    path: "/welcome/details/:id",
    element: <DrinkDetails/>,
  },
  {
    path: "/favorites",
    element: <Favorites/>,
  },
]);
const theme = createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
