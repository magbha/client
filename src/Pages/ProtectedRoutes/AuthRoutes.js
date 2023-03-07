import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const AuthRoutes = () => {
    const isAuth = useSelector((state) => state.persistedReducer.isAuth) ;
    
    
  return isAuth ? <Outlet /> :  <Navigate to="/sign-in" />
  
}

export default AuthRoutes;