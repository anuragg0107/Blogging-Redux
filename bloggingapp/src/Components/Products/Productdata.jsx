import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import { Box, Text,Image, Heading } from '@chakra-ui/react'
const Productdata = (el) => {
    const {id,name,save,image,mrp,ourprice}=el
  return (
    <div className='product-details'>
 {/* <Text>ProductData</Text> */}
   <Link to={``}>
   <Box className='discount'>
    <Image className='discount-img' src='https://www.forevernew.co.in/pub/media/images/off.png' alt='' />
    <span className='save'>{save}</span>
   </Box>
   <Box className='offer-img'>
   <Image src={image}  alt={name} loading='lazy' className='product-img' />
   </Box>
   <Box className='product-details'>
   <Heading as='strong' fontSize={'14px'} textAlign='center'>{name}</Heading>
   </Box>
   <Box className='product-price'>
    <span className='ourprice'>{ourprice}</span>
    <span className='mrp'>{mrp}</span>
   </Box>
   </Link>
    </div>
  )
}

export default Productdata