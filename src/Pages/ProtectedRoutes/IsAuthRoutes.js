import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

const IsAuthRoutes = () => {
    const isAuth = useSelector((state) => state.persistedReducer.isAuth);
  return isAuth === false ?  <Outlet/> : <Navigate to="/dash" /> 
  
}

export default IsAuthRoutes;
