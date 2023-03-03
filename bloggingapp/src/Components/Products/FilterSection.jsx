import React from 'react'
import {Box,Input,Text,Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react";
const FilterSection = () => {
  return (
    <div className='filter-column'>
      <Box>
        <Text>Category</Text>
        <Text>All</Text>
        <Text>Mobile</Text>
        <Text>Men's Wear</Text>
        <Text>Women's Wear</Text>
        <Text>Watches</Text>
        <Text>Computer</Text>
      </Box>
      <Box>
        <Text>Price</Text>
        <Text>Rs.100,000.00</Text>
        <input type='range' />
      </Box>
    </div>
  )
}

export default FilterSection