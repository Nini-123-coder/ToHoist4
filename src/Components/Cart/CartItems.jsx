import React from 'react';
import './cartItems.css';
import { deleteCart, incrementQty, decrementQTY } from '../global/Slice';
import { useDispatch } from 'react-redux';

const CartItems = ({info}) => {
  const dispatch = useDispatch();

  return (
    <div key={info.id} className="CartItemContainer">
      <div className="CartItemImage">
        <img src={info.image} alt="sale" />
      </div>
      <div className="CartDetails">
        <h3>{info.name}</h3>
        <p>{info.description}</p>
        <div className="CartItemsInfo">
          <p>${info.totalPrice}</p>
          <button className="CartItemDelete"  onClick={() => dispatch(deleteCart(info))}>Delete</button>
          <div className="CartActions">
            <button onClick={() => dispatch(decrementQTY(info))}>-</button>
            <p>{info.QTY}</p>
            <button  onClick={() => dispatch(incrementQty(info))}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
