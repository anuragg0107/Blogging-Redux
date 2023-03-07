import React from 'react'
import {Box,Select} from "@chakra-ui/react"
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import {BiGridSmall} from "react-icons/bi"
import {TfiLayoutGrid4} from "react-icons/tfi"
const Sort = () => {
  return (
    <>
       <Box className='top-data'>
     {/* <Box className='sorter'><a href='#'><FaFilter className='filter-icon' /></a></Box> */}
     <Box className='grid-tab'>
        <button className='grid-tab-btn'><TfiLayoutGrid4 className='btn' /></button>
        <button className='grid-tab-btn'><BsFillGrid3X3GapFill className='btn' /></button>
        <button className='grid-tab-btn'><BiGridSmall className='btn' /></button>
     </Box>
     <Box className='sort-data'>
        <Select placeholder='Sort Data'>
            <option>sort by low to high</option>
            <option>sort by high to low</option>
            <option>sort by A to Z</option>
            <option>sort by Z to A</option>
        </Select>
     </Box>
     </Box>
    </>
  )
}

export default Sort