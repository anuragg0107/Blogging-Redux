import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Landing/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Error from '../ErrorPage/Error'
import Product from '../Products/Product'
const AllRoutes = () => {
  return (
    <div>
        <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' />
        <Route path='/signin' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
        </Routes>
    </div>
  )
}

export default AllRoutes