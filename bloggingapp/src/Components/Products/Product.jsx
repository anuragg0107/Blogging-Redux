import React from 'react'
import { Box,Text,Button, Select } from '@chakra-ui/react'
import "./Product.css"
import { useProductContext } from '../../Context/Productcontext'
import Navbar from '../Navbar/Navbar'
import Productdata from './Productdata'
import Footer from '../Footer/Footer'
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import {BiGridSmall} from "react-icons/bi"
import {TfiLayoutGrid4} from "react-icons/tfi"

const Product = () => {
    const {loading,products}=useProductContext()
    console.log(products)
    if(loading){
        return <div>...loading</div>
    }
  return (
    <div >
    <Box>
        <Navbar />
    </Box>
    <Box className='product-list'>
        <Box className='toolbar-data'>
     <Box className='grid-tab'>
        <button className='grid-tab-btn'><TfiLayoutGrid4 className='btn' /></button>
        <button className='grid-tab-btn'><BsFillGrid3X3GapFill className='btn' /></button>
        <button className='grid-tab-btn'><BiGridSmall className='btn' /></button>
     </Box>
     <Box className='sort-data'>
        <Select placeholder='Sort Data'>
            <option></option>
        </Select>
     </Box>
        </Box>

        <Box className='grid-data'>
        {
          products &&   products.map((el)=>{
                return <Productdata key={el.id} {...el} />
            })
        }
        </Box>
    </Box>
      {/* <Box className='grid-data'>
      {
          products &&   products.map((el)=>{
                return <Productdata key={el.id} {...el} />
            })
        }
      </Box> */}
        <Box>
            <Footer />
        </Box>
    </div>
  )
}

export default Product