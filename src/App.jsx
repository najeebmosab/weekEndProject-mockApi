import { useState } from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Nabar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import { Product } from './Components/Products/Product';
import { Detalid } from './Components/Detalid/Detalid';
import {Dashboard} from "./Components/DashBord/Dashboard";
import {Edit} from "./Components/DashBord/Edit/Edit";
import {Add} from "./Components/DashBord/Add/add";
Edit
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login></Login>
    },
    {
      path: "", element: <Nabar></Nabar>, children: [
        { path: "/home", element: <Home></Home>, },
        { path: "/shosePage", element: <Product></Product> },
        { path: "/Detalid/:id", element: <Detalid></Detalid> },
        { path: "/dashboard", element: <Dashboard></Dashboard> },
        {path:"/update/:id",element:<Edit></Edit>},
        {path:"/add",element:<Add></Add>}
      ]
    },
    {
      path:"*",
      element:<><h2>Not Found</h2></>
    }
  ]);
  return (<>

    <RouterProvider router={router} />

  </>

  )
}

export default App
