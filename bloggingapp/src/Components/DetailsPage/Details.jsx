import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./Details.css"
import { Box } from '@chakra-ui/react'
const Details = () => {
  return (
    <div>
    <Box mb='86px'>
        <Navbar />
    </Box>

    <Box>
        <Footer />
    </Box>
    </div>
  )
}

export default Details