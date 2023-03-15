import { Button, Heading,Text,Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"
const Error = () => {
  return (
    <div>
      <Box className='main-content1'>
      <Heading as='h2' textAlign={'center'} size='2xl'>404</Heading>
        <Heading  as='h2' fontWeight={'500'} textAlign={'center'} size='2xl'>UH OH! You're lost.</Heading>
        <Text fontSize={'20px'}>
            The page you are looking for dose not exist. But you can click on below button and you will to home page.
        </Text>
     <Button backgroundColor={'brown'} _hover={{backgroundColor:"brown"}} className='goHome'>
        <Link to='/'>Home</Link>
     </Button>
      </Box>
    </div>
  )
}

export default Error