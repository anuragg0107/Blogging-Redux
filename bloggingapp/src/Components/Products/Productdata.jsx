import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import { Box, Text,Image } from '@chakra-ui/react'
const Productdata = (el) => {
    const {id,name,image,mrp}=el
  return (
    <>
 
   <Link to={``}>
   <Image src={image}  alt={name} loading='lazy' />
    <Text>{name}</Text>
   </Link>
    </>
  )
}

export default Productdata