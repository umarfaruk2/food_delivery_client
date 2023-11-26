import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Home from './pages/Home/Home';
import SignUp from './pages/Account/SignUp';
import Login from './pages/Account/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
  </React.StrictMode>,
)
