import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Landing/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Error from '../ErrorPage/Error'
import Product from '../Products/Product'
import Contact from '../Contact/Contact'
import Cart from '../Cart/Cart'
import Details from '../DetailsPage/Details'
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
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Cart /> } />
        <Route path='/details' element={<Details />} />
        </Routes>
    </div>
  )
}

export default AllRoutes