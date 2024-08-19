import React from 'react'
import './App.css'
import Layout from './Components/Layout/Layout'
import HomePage from './Components/HomePage/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Login from './Components/Auths/Login';
import SignUp from './Components/Auths/SignUp';
import UserPrivate from './Components/UserPrivate';
import VendorPage from './Components/Vendor/vendor';
import MenuPage from './Components/Menu/MenuPage';
import Cart from './Components/Cart/Cart';
import Payment from './Components/Payment/Payment';

const router = createBrowserRouter([
 {
  path:"/",
  element: <Login/>
 },
 {
  path: "signup",
  element: <SignUp/>
 },
 {
  path: "app",
  element : <UserPrivate/>,
  children:[
    {
      element: <Layout/>,
      children:[
        {
          path: "home",
          element: <HomePage/>
        },
        {
          path: "vendor",
          element: <VendorPage/>
        },
        {
          path:"menu/:id",
          element: <MenuPage/>
        },
        {
          path: "cart",
          element: <Cart/>
        },
        {
          path: "payment",
          element:<Payment/>
        }
      ]
     }
  ]
 }
 
])
 



const App = () => {

  return (
    <RouterProvider router={router} />
  )

}

export default App