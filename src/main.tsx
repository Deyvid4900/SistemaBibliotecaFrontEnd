import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Books from './pages/Books/Books';
import Publishers from './pages/Publishers/Publishers';
import Author from './pages/Author/Author';
import Dashboard from './pages/DashBoard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Users",
    element: <Users />,
  },
  {
    path: "/Books",
    element: <Books />,
  },
  {
    path: "/Publishers",
    element: <Publishers />,
  },
  {
    path: "/Author",
    element: <Author />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
