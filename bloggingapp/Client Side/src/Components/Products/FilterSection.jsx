import React from 'react'
import {Box,Input,Text,Flex,Button,UnorderedList,ListItem} from "@chakra-ui/react";
const FilterSection = () => {
  return (
    <>
     <Box className='filter-data'>
         {/* <Heading fontSize={'28px'} mb='20px' borderBottom={'1px'} textAlign='center' pb='20px' fontWeight={'500'} as='h2'>FILTER</Heading> */}
          <details className='data-details'>
          <summary>Size</summary>
           <Flex>
          <Box className='data-flex'>
          <Text className='data-flex-name'>Size</Text>
            <Box className='data-flex-data'>
                <Button>S</Button>
                <Button>M</Button>
                <Button>L</Button>
                <Button>XL</Button>
                <Button>XXL</Button>
            </Box>
          </Box>
           </Flex>
          </details>
       
      
          <details className='data-details'>
          <summary>Types</summary>
           <Flex>
          <Box className='data-flex'>
          <Text className='data-flex-name'>Types</Text>
            <Box className='data-flex-data'>
             
              <UnorderedList className='wrap initial'>
                   <ListItem><a href='#'>Beauty</a></ListItem>
                   <ListItem><a href='#'>Clothes</a></ListItem>
                   <ListItem><a href='#'>Glasses</a></ListItem>
                   <ListItem><a href='#'>Coffee</a></ListItem>
                   <ListItem><a href='#'>Fashion</a></ListItem>
                   <ListItem><a href='#'>Watches</a></ListItem>
                     <ListItem><a href='#'>Shoes</a></ListItem>
                     </UnorderedList>
             
            </Box>
          </Box>
           </Flex>
          </details>
     
       
          <details className='data-details'>
          <summary>Price</summary>
           <Flex >
           <Box className='data-flex'>
           <Text className='data-flex-name'>Price</Text>
            <Box className='data-flex-data'>
                      <Box className='range-track'>
                        <input type='range'  min='0' max='1000' step='1' />
                      </Box>
                      <Box className='price-range'>
                        <span>300</span>
                        <span>1000000</span>
                      </Box>
            </Box>
           </Box>
           </Flex>
          </details>
      </Box> 
       {/* <Box className='grid_item'> */}
        {/* <Box className='filter-sidebar'>
          <FormControl className='filter-form'>
         <Box className='sidebar_group1'>
          <Box className='sidebar_group'>
            <button className='trigger_btn'>Price</button>
            <span className='trigger_icon'><AiOutlineDown /> </span>
          </Box>
         </Box>
         <Box className='sidebar_group2'>
          <Box className='sidebar_group'>
            <button className='trigger_btn'>Size</button>
            <span className='trigger_icon'><AiOutlineDown /> </span>
          </Box>
         </Box>
          </FormControl>
        </Box> */}
      {/* </Box> */}
    </>
  )
}

export default FilterSection