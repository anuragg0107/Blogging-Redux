import React from 'react'
import {
   Box,Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,Heading,HStack,Stack,
    DrawerContent,useDisclosure,Input,
    DrawerCloseButton,Button
  } from '@chakra-ui/react'
  import "../Navbar/Navbar.css"
  import { BsCart4 } from 'react-icons/bs'
  import { cartData } from '../Cart/_data'
  import { CartItem } from '../Cart/CartItem'
  import "./CartDrawer.css"
import { Link } from 'react-router-dom'
const CartDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <div>
     {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}  outline='none' border='none'> */}
        <div className='drawer_name' ref={btnRef} colorScheme='teal' onClick={onOpen}><BsCart4 className='icons' /> &nbsp;Cart</div>
      {/* </Button> */}
      <Drawer size={['xs','xs','sm','sm',]}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent marginTop={'86px'} className='drawer_data'>
          <DrawerCloseButton />
          <DrawerHeader>Bag</DrawerHeader>

          <DrawerBody>
          <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        flex="2"
      >
        <Heading fontSize="xl" fontWeight="bold">
          Shopping Cart (3 items)
        </Heading>
      </Stack>
      <Box border='1px solid black' height='56%' overflowY='scroll'>
      <Stack spacing="6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'><Link to='/checkout'>Cart</Link> </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default CartDrawer