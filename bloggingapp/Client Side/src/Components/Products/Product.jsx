import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import "./Product.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import FilterSection from './FilterSection'
import Sort from './Sort'
import Content from './Content'
const Product = () => {
  return (
    <div >
    <Box mb='89px'>
        <Navbar />
    </Box>
    <Box>
      <Heading textAlign={'center'} size='xl' fontWeight={'500'} as='h1'> All Products</Heading>
    </Box>
    <main>
     <Box className='section'>
       <FilterSection />

      <Box className='right-data'>
    <Sort />
    <Content />
      </Box>

      </Box>
    </main>
        <Box>
            <Footer />
        </Box>
    </div>
  )
}

export default Product