import React from 'react'
import "./productstyle.css"
import Card from './Card'
import foodData from '../../data'


const HomePage = () => {
    // const products =[1,2,3,4,5]
  return (
    <div className='Home'>
       <div className='home-holder'>
        {
          foodData.map((e)=>
        <Card e={e} id ={e.id}/>

          )
        }
       </div>
    </div>
  )
}

export default HomePage