import { Box, Button, FormControl, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./Contact.css"
const Contact = () => {
  return (
    <div>
    <Box mb='86px'>
        <Navbar />
    </Box>
    
    <Box mt='116px' mb='20px'>
        <Heading as='h1' size='2xl' fontWeight={'600'} textAlign='center'>Contact us</Heading>
    </Box>
   <Box className='map'>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.79849721813105!2d80.83247554297841!3d24.562403246978704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f12d5f52fbb%3A0xa6844b85998c5faf!2sjigyasha%20mp%20online!5e0!3m2!1sen!2sin!4v1678103272247!5m2!1sen!2sin" 
    width="100%" height="460"
     style={{border:0}} 
     allowfullscreen=""
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
   </Box>
   
   <Box className='container'>
   <Box className='contact-form'>
    <form action='https://formspree.io/f/mnqyvroe'
     method='POST'
      className='contact-inputs'>
        <Input type='text' name='name' placeholder='Enter your name' required autoComplete='off'  />
        <Input type='email' name='email' placeholder='Enter your email' required autoComplete='off' />
        <textarea placeholder='Enter your message' name='message' cols='30' rows={'30'} required autoComplete='off'></textarea>
        <Input type='submit' value='send' className='button'  />
    </form>
   </Box>
   </Box>

    <Box>
        <Footer />
    </Box>
    </div>
  )
}

export default Contact