import {Image,Box,Text,Button,Heading} from "@chakra-ui/react";
import React from 'react'
import {AiOutlineRight} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Home.css"
import HotPick from "./HotPick";
const LandingPageData = () => {
  return (
    <div>
    <Box className="new-arrivals">
    <Image src='https://www.forevernew.co.in/media/wysiwyg/home/NEW_ARRIVALS_BANNER_Desktop_.jpg' alt='new arrivals' />
    </Box>
    <Box className="refer">
        <Image src='https://www.forevernew.co.in/media/wysiwyg/home/Forever_New_LINKS_Desktop_1_.jpg' alt='refer' />
    </Box>
    <Box>
        <Heading as='h2' size='xl' mb='25px' mt='25px' fontWeight={'400'} textAlign='center'>HOT PICKS</Heading>
      <HotPick />
    </Box>
   <Box className="shop-data">
   <Heading as='h2' size={"xl"} fontWeight='400' textAlign={'center'}>TRENDING NOW</Heading>
   <Box  className='shop-data1'>
   <Box className="data1">
   <Box>
   <Image src='https://www.forevernew.co.in/media/wysiwyg/home/color-pop.jpg' alt='color pop' opacity={'1'} />
   </Box>
   <Box textAlign={'center'} padding="25px 0px 35px">
    <Heading fontSize={'20px'} fontWeight='400' textAlign={'center'} lineHeight='1.75' mb='20px' letterSpacing={'2px'}>Color Pop</Heading>
     <Text as='p' fontSize={'13px'} fontWeight='400' letterSpacing={'0.75'} textAlign='center' mb={'20px'}>Perfect for those who love to introduce a splash of color to their wardrobe achieving a radiant look to make weekday dressing simple</Text>
     <Link to='/products'><Button backgroundColor={'transparent'} border='none' outline='none' alignItems={'center'} p='0 0 3px' m='0 0 0 12px' _hover={{backgroundColor:"transparent"}}>SHOP NOW <AiOutlineRight/></Button></Link>
   </Box>
   </Box>
   <Box className="data1">
   <Box textAlign={'center'} padding="25px 0px 35px">
    <Heading fontSize={'20px'} fontWeight='400' textAlign={'center'} lineHeight='1.75' mb='20px' letterSpacing={'2px'}>Work Wear</Heading>
     <Text as='p' fontSize={'13px'} fontWeight='400' letterSpacing={'0.75'} textAlign='center' mb={'20px'}>A diverse range of pieces that exude both power and glamour, and at the same time focus on timeless styles, perfect for work!</Text>
     <Link to='/products'><Button backgroundColor={'transparent'} border='none' outline='none' alignItems={'center'} p='0 0 3px' m='0 0 0 12px' _hover={{backgroundColor:"transparent"}}>SHOP NOW <AiOutlineRight/></Button></Link>
   </Box>
   <Box>
   <video controls autoPlay loop allowfullscreen muted playsInline width={'100%'}>
   <source type='video/mp4' src='https://www.forevernew.co.in/media/wysiwyg/home/Work-wear-Edit.mp4' />
   </video>
   </Box>
   </Box>
   <Box className="data1">
   <Box>
   <Image src='https://images.meesho.com/images/products/132345904/j71dr_512.jpg' alt='color pop' opacity={'1'} />
   </Box>
   <Box textAlign={'center'} padding="25px 0px 35px">
    <Heading fontSize={'20px'} fontWeight='400' textAlign={'center'} lineHeight='1.75' mb='20px' letterSpacing={'2px'}>Vacation Edit</Heading>
     <Text as='p' fontSize={'13px'} fontWeight='400' letterSpacing={'0.75'} textAlign='center' mb={'20px'}>Embrace the holiday season with stylish yet effortless styles making you feel comfortable and chic at the same time</Text>
     <Link to='/products'><Button backgroundColor={'transparent'} border='none' outline='none' alignItems={'center'} p='0 0 3px' m='0 0 0 12px' _hover={{backgroundColor:"transparent"}}>SHOP NOW <AiOutlineRight/></Button></Link>
   </Box>
   </Box>
   </Box>
   </Box>
    <Box className="refer">
        <Image src='https://www.forevernew.co.in/media/wysiwyg/home/Petite_banner_Desktop.jpg' alt='pretty' />
    </Box>
    </div>
  )
}

export default LandingPageData