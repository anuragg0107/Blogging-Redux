import {Box, Button,Image, FormControl, Heading, Input,Text, useToast} from "@chakra-ui/react"
import React from 'react'
import "./Login.css"
import {AiOutlineMail} from "react-icons/ai";
import {RiLockPasswordFill} from "react-icons/ri";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = () => {
  const toast=useToast()
  return (
    <div>
    <Box>
    <Navbar />
    </Box>
    <Box className="gif">
      <Image loading='lazy' src='https://www.riddle.com/imageservice/q_80,f_auto,c_fill,w_960,h_540/wohqesmdcg21qa5pqvjk' alt='gif' />
    </Box>
   
    <Box className="main-content">
    <Box className="card">
    <Box className="container">
      <Heading textAlign={'center'} as='h2' size={"xl"} fontWeight='500'>Login</Heading>
    <Box className='container-data'>
     <Heading as={'h3'} size='xl' fontWeight={'400'} textAlign='center'>Have an account?</Heading>
    <FormControl className="form-data">
      <Box className="inputBox">
        <Input type='email' className="user" placeholder="Enter your email" />
        {/* <span>Email</span> */}
      </Box>
      <Box className="inputBox">
        <Input type='password' className="user" placeholder="Enter your password" />
        {/* <span>Password</span> */}

      </Box>
       <Heading mb={'10px'} mt='10px' ml='10px' fontSize={'18px'} fontWeight='500'>Don't have an account? <Link to='/register'>Register</Link></Heading>
      <input type="submit" value="Send" className='sendBtn'
                     onClick={()=>
                     toast({
                      title:"Login Successful",
                      position:"top",
                      isClosable:true,
                      duration:3000,
                      status:"success",
                     })
                     }
                      /> 
    </FormControl>
    </Box>
    </Box>
    </Box>

    <Box className="right-content">
    <Heading as='h2' textAlign={'center'} fontWeight='460' textTransform='uppercase' mb='5px'>WearOutlet Allure</Heading>
    <Text textAlign={'center'}  mb='6px'>Discover all the ways we're have to make it your moment.</Text>
    <Box className="right-data1">
      <Box className="right-data-box">
        <span textAlign='center'><img src='https://www.forevernew.co.in/pub/media/wysiwyg/reward/access.png' alt='image1' /></span>
      <Text className="text">As part of the Forever New family, you’ll gain VIP invitations to member-only events and in-store experiences</Text>
      </Box>
      <Box className="right-data-box">
      <span textAlign='center'><img src='https://www.forevernew.co.in/pub/media/wysiwyg/reward/spend.png' alt='image2' /></span>
      <Text className="text">Make every purchase even more rewarding by unlocking milestones and earning every step of the way</Text>
      </Box>
      <Box className="right-data-box">
      <span textAlign='center'><img  src='https://www.forevernew.co.in/pub/media/wysiwyg/reward/gain.png' alt='image3' /></span>
      <Text className="text" >Skip the queue with early access to new collection launches and sale events</Text>
      </Box>
      <Box className="right-data-box">
      <span textAlign='center'><img src='https://www.forevernew.co.in/pub/media/wysiwyg/reward/receive.png' alt='image4' /></span>
      <Text className="text">Who doesn’t love a celebratory treat. We’ll help you make the most of your special day, with birthday & anniversary vouchers each year</Text>
      </Box>
    </Box>
    </Box>
    </Box>
    <Box>
      <Footer />
    </Box>
    </div>
  )
}

export default Login