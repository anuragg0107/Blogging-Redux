import React from 'react'
import {  Heading, Button,Input, UnorderedList, ListItem,useColorMode,useDisclosure } from '@chakra-ui/react'
import "./Navbar.css"
import {VscSignIn} from "react-icons/vsc"
import { Link } from 'react-router-dom'
import {TbSun} from "react-icons/tb"
import {RiMoonClearLine} from "react-icons/ri"
import CartDrawer from '../CartDrawer/CartDrawer'

const Navbar = () => {
  const {colorMode,toggleColorMode}=useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBag = useDisclosure();
  return (
    <div>
    <nav class="navbar">

<Link to='/'><Heading as='h1' size='2xl' fontWeight="40">WearOutlet</Heading></Link>
<UnorderedList class="nav-links">
<Input type="checkbox" id="checkbox_toggle" />
<label for="checkbox_toggle" class="hamburger">&#9776;</label>
<div class="menu">
<ListItem><Link to="/">Home</Link></ListItem>
{/* <ListItem><Link to="/about">About</Link></ListItem> */}
<ListItem class="services">
<Link to="/products">Products</Link>
{/* <ul class="dropdown">
<li><a href="/">Dropdown 1 </a></li>
<li><a href="/">Dropdown 2</a></li>
<li><a href="/">Dropdown 2</a></li>
<li><a href="/">Dropdown 3</a></li>
<li><a href="/">Dropdown 4</a></li>
</ul> */}
</ListItem>
<ListItem><Link to="/contact">Contact</Link></ListItem>
<ListItem cursor='pointer'  ><CartDrawer onClose={drawerBag.onClose} isOpen={drawerBag.isOpen}  /></ListItem>
<ListItem className='cart-data'> <div><VscSignIn className='icons' />  &nbsp;<Link to='/signin'>Signin</Link></div></ListItem>
<ListItem> <Button bg={'black'} cursor='pointer' backgroundColor={'black'} className='toggleButton' onClick={toggleColorMode}> {colorMode === <TbSun /> ? <RiMoonClearLine />: <TbSun />}</Button></ListItem>
</div>
</UnorderedList>
</nav>
    </div>
  )
}

export default Navbar