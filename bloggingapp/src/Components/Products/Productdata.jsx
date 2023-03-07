import React, { useState } from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Box, Text,Image, Heading } from '@chakra-ui/react'
const Productdata = (el) => {
    const {id,title,discount,image_url,mrp,our_price}=el
    // const [data,setData]=useState(el)
    // const fetchData=()=>{
    //  setTimeout(()=>{
    //   setData(data)
    //  },500)
    // }
  return (
   <>
    {/* <InfiniteScroll dataLength={data} next={fetchData} hasMore={true}
    loader={<h4>...Loading</h4>}
    > */}
    <div className='product-details'>
 {/* <Text>ProductData</Text> */}
   <Link to={``}>
   <Box className='discount'>
    <Image className='discount-img' src='https://www.forevernew.co.in/pub/media/images/off.png' alt='' />
    <span className='save'>{discount}</span>
   </Box>
   <Box className='offer-img'>
   <Image src={image_url[0]}  alt={title} loading='lazy' className='product-img' />
   </Box>
   <Box className='product-details'>
   <Heading as='strong' fontSize={'14px'} textAlign='center'>{title}</Heading>
   </Box>
   <Box className='product-price'>
    <span className='ourprice'>₹{our_price}</span>
    <span className='mrp'>₹{mrp}</span>
   </Box>
   </Link>
    </div>
    {/* </InfiniteScroll> */}
   </>
  )
}

export default Productdata