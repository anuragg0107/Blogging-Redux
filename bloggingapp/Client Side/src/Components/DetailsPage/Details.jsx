import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./Details.css"
import { Box, Button, Heading,Image, Input,Select,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Details = () => {
  return (
    <div>
    <Box mb='86px'>
        <Navbar />
    </Box>
    <Box className='detail_main'>
      <Box className='detail_form'>
         <Box className='shipping_form'>
             <Heading as='h2' size='xl' lineHeight={'1.2'} fontWeight='700' pt='20px' pb='20px'>Shipping Information</Heading>
           <Box className='shipping_from_details'>
            <label className='shipping_form_label'>Full name</label>
            <Input type='text' placeholder='Your first and last name' className='shipping_form_input' />
           </Box>
           <Box className='shipping_from_details'>
            <label className='shipping_form_label'>Street address 1</label>
            <Input type='text' placeholder='Enter your street name' className='shipping_form_input' />
           </Box>
           <Box className='shipping_from_details'>
            <label className='shipping_form_label'>Street address 2</label>
            <Input type='text' placeholder='Enter your locality name' className='shipping_form_input' />
           </Box>
           <Box className='shipping_from_details shipping_from_detail'>
            <Box className='shipping_form_sub'>
            <label className='shipping_form_label'>Zip Code</label>
            <Input type='number' placeholder='Zip Code' className='shipping_form_input' />
            </Box>
            <Box className='shipping_form_sub city'>
            <label className='shipping_form_label'>City</label>
            <Input type='text' placeholder='City' className='shipping_form_input' />
            </Box>
           </Box>
           <Box className='shipping_from_details'>
            <label className='shipping_form_label'>Email address</label>
            <Input type='email' placeholder='Enter your email address' className='shipping_form_input' />
           </Box>
         </Box>
         {/* <Heading as='h2' size='xl' lineHeight={'1.2'} fontWeight='700' pt='20px' pb='20px'>Payment Information</Heading> */}
        
      </Box>
      <Box className='shipping_details_data'>
          <Box className='shipping_data'>
          <Heading as='h2' size='xl' lineHeight={'1.2'} fontWeight='700' pt='20px' pb='20px'>Order Summary</Heading>
           <Box className='shipping_data_data'>
              <Box className='product_data_information'>
               <Box className='shipping_right_box'>
                 <Box className='shipping_img_box'>
                  <Image src='https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' alt='' />
                 </Box>
                 <Box className='shipping_product_details'>
                  <Text className='shipping_product_name'> Bamboo Tan Bamboo Tan Bamboo Tan Bamboo Tan Bamboo Tan Bamboo Tan</Text>
                  <Box className='shipping_increase'>
                    <Select>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                    </Select>
                  </Box>
                 </Box>
                
               </Box>
               <Text className='shipping_price'>$199</Text>
              </Box>
              <Box className='shipping_border'></Box>
              <br />
              <br />
              <Box className='shipping_total'>
                <Text>Subtotal</Text>
                <Text>$597.00</Text>
              </Box>
              <Box className='shipping_total'>
                <Text>Shipping cost</Text>
                <Text>$24.00</Text>
              </Box>
            {/* <br /> */}
            <Box className='shipping_border'></Box>
            <br />
            <Button className='shipping_button'>Place Order</Button>
           </Box>
           {/* <Text className='shipping_price'>$199</Text> */}
          </Box>
        </Box>
    </Box>

    <Box>
        <Footer />
    </Box>
    {/* <Box className='details_page'>
      <Heading className='detail_header'>
        <Box className='detail_content'>
          <Link to='/'>
            <Image src='https://logo.templateo.com/app/data/4dl/4dljw7z1il-g9qmblta67.jpg' alt='logo' />
          </Link>
          <span></span>
        </Box>
      </Heading>
    </Box>
    <Box className='detail_data'>
      
    </Box> */}
    </div>
  )
}

export default Details