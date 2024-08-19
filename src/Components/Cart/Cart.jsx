import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import CartItems from './CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { clearCart } from '../global/Features';

const Cart = () => {
  const{cart,total,totalQty} = useSelector((state)=> state)
  const dispatch =useDispatch()
  
  const Nav = useNavigate()

  return (
    <div className="CartContainer">
      <div className="CartInfo">
        <div>Total: ${Number( total).toFixed(2)}</div>
        <div className="CartClear">Clear Cart</div>
        <div className="CartClear" onClick={()=> Nav("/app/payment")}>Pay</div>
        <div>Total Quantity:{totalQty} </div>
      </div>
      <div className="CartHolder">
        {cart.map((e) => (
          <CartItems info={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
