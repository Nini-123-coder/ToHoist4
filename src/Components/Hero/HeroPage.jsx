import React from 'react'
import './HeroPage.css'
import { FcManager } from "react-icons/fc";
import { FaStar } from "react-icons/fa6";



const HeroPage = () => {
  return (
    <div className='hero'>
        <div className='heropage'>
            <div className='page'> 
            <h2>IT'S NOT JUST FOOD, IT'S AN EXPERIENCE.</h2>
            </div>
            <div className='btn-holder'>
                <button className='hero-btn'>View Menu</button>
                <button className='hero-btn2'>Book A Plate</button>
            </div>
            <div className='lines'>
                <p>Reviews:</p>
            </div>
            <div className='lined'>
            <FcManager /><FcManager /><FcManager /><FcManager />
            </div>
            <div className='rate'>
            <FaStar  /><FaStar  /><FaStar  /><FaStar  /><FaStar  />
            </div>
        </div>
    </div>
  )
}

export default HeroPage