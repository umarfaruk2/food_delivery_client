import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import SignUp from './pages/Account/SignUp';
import Login from './pages/Account/Login';
import FoodDetail from './components/FoodDetail';
import AllFood from './pages/AllFood/AllFood';
import Sidebar from './pages/Dashboard/Sidebar';
import CreateDish from './pages/Dashboard/CreateDish';
import ManageDish from './pages/Dashboard/ManageDish';


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
  },
  {
    path: '/food_detail/:id',
    element: <FoodDetail />
  },
  {
    path: '/all-food',
    element: <AllFood />
  },
  {
    path: '/dashboard',
    element: <Sidebar />,
    children: [
      {
        path: '',
        element: <CreateDish />
      },
      {
        path: 'manage-dish',
        element: <ManageDish />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
            <ToastContainer />
        </ThemeProvider>
  </React.StrictMode>,
)
