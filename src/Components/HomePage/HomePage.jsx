import React from 'react'
import './HomePage.css'
import HeroPage from '../Hero/HeroPage'
import Product from './Product'

const HomePage = () => {
  return (
    <div className='homepage'>
        <HeroPage/>
        <Product/>
    </div>
  )
}

export default HomePage