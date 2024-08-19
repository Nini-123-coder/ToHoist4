import React, { useEffect, useState } from 'react'
import foodData from '../../data';
import "./style.css"
import { useParams } from 'react-router-dom';
import Cardses from './Cardses';
const MenuPage = () => {

  // const [Menu, setMenu] = useState([])
  // const {id} = useParams();
  // useEffect(()=>{
  //   const filterItems = foodData.filter(event => event.vendor.toLocaleLowerCase() === id)
  // // console.log(filterItems);
  // setMenu(filterItems);
  // },[])
  // console.log(Menu);
  // console.log(foodData);
  
  const [vendors,setVendors] = useState([])
  const {id} = useParams()

    useEffect(()=>{
        const holdArray = foodData.filter((e)=> e.vendor.toUpperCase() === id);
        console.log(holdArray)
        setVendors(holdArray)
      
   
      // setVendors(catchVend)
    },[id])

  
  
  return (
    <div className='Product-wrapper'>
        <div className='Product-inner-wrapper'>
          {
            vendors.map((e)=>(
              <Cardses e={e} id ={e.id}/>
            )
            )
          }
          {/* <Cardses/> */}
            
        </div>
    </div>
  )
}


export default MenuPage