import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Landing/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
const AllRoutes = () => {
  return (
    <div>
        <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        </Routes>
    </div>
  )
}

export default AllRoutes