import React, { useEffect, useState } from 'react'
import './VendorPage.css'
import OneVendor from './OneVendor'
import foodData from '../../data'

const VendorPage = () => {
    const [vendors,setVendors] = useState([])

    useEffect(()=>{
        const holdArray = foodData.map((e)=> e.vendor);
        const catchVend = holdArray.reduce((a,e,i)=> {
          if(a.length === 0){
            a.push(e.toUpperCase());
            return a
          }else if(a.includes(e.toUpperCase())) {
            return a
          }else{
            a.push(e.toUpperCase());
            return a
          }
        },[])
      setVendors(catchVend)
    },[])
    

  return (
    <div className='vendor'>
        {
            vendors.map((e)=>
        <OneVendor  e={e} id={e.id}/>

            )
        }
    </div>
  )
}

export default VendorPage