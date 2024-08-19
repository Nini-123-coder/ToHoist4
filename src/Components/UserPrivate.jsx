import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const UserPrivate = () => {
    const {isLoggedIn} = useSelector((state)=>state.loginInfo)
    console.log(isLoggedIn);
    

  return (
    <>
    {isLoggedIn ? <Outlet/> : <Navigate to="/" replace={true}/>}
    </>
  )
}

export default UserPrivate