import React, { useState } from "react";
import "./Header.css";
import { FaUserPlus } from "react-icons/fa6";
import { FaDiceFour } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";



const Header = () => {

    const Nav = useNavigate();

  return (
    <div className="headerMain">
      <div className="headerInner">
        <div className="logo">
        <h1>La Curve</h1>
        </div>
        <div className="logo2">
            <p><NavLink to = '/app/home' style={{color:"white"}}>Home</NavLink></p>
            <p ><NavLink to = '/app/vendor' style={{color:"white"}}>Vendor</NavLink></p>
            <p><NavLink to = '/app/cart' style={{color:"white"}}>Cart</NavLink></p>
        </div>
        <div className="userprofile">
            <button onClick={()=> Nav("/")}>Login</button>
            <button onClick={()=> Nav("/signUp")}>Sign Up</button>
      
  
         
        </div>
      </div>
    </div>
  );
};

export default Header;
