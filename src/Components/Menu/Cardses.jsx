import React from 'react'
import "./Card.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../global/Slice'
// import { useNavigate} from 'react-router-dom'
const Cardses = ({e}) => {
  const dispatch = useDispatch()
  // const Nav = useNavigate()
console.log(addToCart);


  return (
    <div  className='cardWrapper'>
        <div className='card-img'>
            <img src={e.image} alt="" />
        </div>
        <div className='product-name'>
          {e.name}
        </div>
        <div className='product-price'></div>
        <div className='btnHolder'>

        {/* <button className='addCartbtn'onClick={(()=>dispatch(addToCart(e)))} >Add to cart</button> */}
        <button className='addCartbtn' onClick={(()=>dispatch(addToCart(e)))}>Add to cart</button>

        
        </div>
    </div>
  )
}

export default Cardses