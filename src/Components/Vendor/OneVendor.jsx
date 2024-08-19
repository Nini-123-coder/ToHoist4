import React from 'react'
import "./OneVendor.css"
import { useNavigate } from 'react-router-dom'

const OneVendor = ({e}) => {
  const Nav = useNavigate()

    

  return (
    <div className='vendors'>
        <div className='ven' onClick={(()=> Nav(`/app/menu/${e}`))}>
            {/* <NavLink to= '/menu/${e}' style={{color:"white"}}> */}
            {e}
            {/* </NavLink> */}

        </div>
        <div className='vendorimg'></div>
    </div>
  )
}

export default OneVendor