import React from 'react'
import { Box,Text,Button,UnorderedList,ListItem,Tooltip, Select, Heading, Input, Flex } from '@chakra-ui/react'
import "./Product.css"
import { useProductContext } from '../../Context/Productcontext'
import Navbar from '../Navbar/Navbar'
import Productdata from './Productdata'
import Footer from '../Footer/Footer'
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import {BiGridSmall} from "react-icons/bi"
import {TfiLayoutGrid4} from "react-icons/tfi"
import FilterSection from './FilterSection'
import Sort from './Sort'
import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineDown} from "react-icons/ai"

const Product = () => {
    const {loading,products}=useProductContext()
    console.log(products)
    if(loading){
        return <div>...loading</div>
    }
  return (
    <div >
    <Box mb='89px'>
        <Navbar />
    </Box>
    <Box>
      <Heading textAlign={'center'} size='xl' fontWeight={'500'} as='h1'> All Products</Heading>
    </Box>
    {/* <Box className='product-list'> */}
    {/* <Box className='left-side'>
        <FilterSection />
    </Box>    */}
       {/* <Box className='right-side'> */}
       {/* <Box className='toolbar-data'>
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
        </Box> */}

        {/* <Box className='grid-data'>
        {
          products &&   products.map((el)=>{
                return <Productdata key={el.id} {...el} />
            })
        }
        </Box> */}
       {/* </Box> */}
   {/* </Box>  */}
      {/* <Box className='grid-data'>
      {
          products &&   products.map((el)=>{
                return <Productdata key={el.id} {...el} />
            })
        }
      </Box>
      {/* <Box className='filter-data'>
            <FilterSection />
        </Box>
      <Box className='grid-data-main'>
       
        <section className='product-sort'>
            <Box className='sort-filter'>
                <Sort />
            </Box>
            <Box className='main-product'>
              <Productdata />
            </Box>
        </section>
      </Box> */}
    <main>
     <Box className='section'>
     {/* <Box className='container-wide'>
        <Box className='wrap'>
          <Box className='heading'>
            <Heading as='h1' className='title' textAlign={'center'} textTransform='capitalize' size='xl'>All Products</Heading>
          </Box>
          <Box className='content'>
            <Box className='sidebar'>
              {/* id='sidebar-filter' */}
            {/* <Box className='wrap'>
            <a href='#' className='close-trigger'><AiOutlineClose /></a>
            <Box className='sidebar-content'>
              <Box className='sidebar-title'>Filter</Box>
              <Box className='widget'>
                <Box className='summary'>
                 <Input type='checkbox' id='aaa' name='cats' checked />
                 <label for='aaa'>
                   <Flex>
                   <span>Size</span>
                    <AiOutlineDown className='icons' />
                   </Flex>
                  </label>
                  <Box className='accord product-size'>
                    <Box className='wrap'>
                      <Button>S</Button>
                      <Button>M</Button> */}
                      {/* <Button>L</Button>
                      <Button>XL</Button>
                      <Button>XXL</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className='widget'>
                <Box className='summary'>
                 <Input type='checkbox' id='aab' name='cats' checked />
                 <label for='aab'>
                   <Flex>
                   <span>Categories</span>
                    <AiOutlineDown className='icons' />
                   </Flex>
                  </label>
                  <Box className='accord list-block scrollto'>
                    <UnorderedList className='wrap initial'>
                   <ListItem><a href='#'>Beauty</a></ListItem>
                   <ListItem><a href='#'>Clothes</a></ListItem>
                   <ListItem><a href='#'>Glasses</a></ListItem>
                   <ListItem><a href='#'>Coffee</a></ListItem>
                   <ListItem><a href='#'>Fashion</a></ListItem>
                   <ListItem><a href='#'>Watches</a></ListItem>
                     <ListItem><a href='#'>Shoes</a></ListItem>
                     <ListItem><a href='#'>Sleepers</a></ListItem> */} 
                     {/* <ListItem><a href='#'></a></ListItem>
                     <ListItem><a href='#'></a></ListItem>
                     <ListItem><a href='#'></a></ListItem>
                     <ListItem><a href='#'></a></ListItem> */}

                    {/* </UnorderedList>
                  </Box>
                </Box>
              </Box>
              <Box className='widget'>
                    <Box className='summary'>
                      <label><span>Price</span></label>
                      <Box className='range-track'>
                        <input type='range'  min='0' max='1000' step='1' />
                      </Box>
                      <Box className='price-range grey-color'>
                        <span>300</span>
                        <span>1000000</span>
                      </Box>
                    </Box>
              </Box>
            </Box>
            </Box>
            </Box>
            <Box className='category-content'></Box>
          </Box>
        </Box>
      </Box> */} 
      <Box className='filter-data'>
         
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
              {/* <Box> */}
              <UnorderedList className='wrap initial'>
                   <ListItem><a href='#'>Beauty</a></ListItem>
                   <ListItem><a href='#'>Clothes</a></ListItem>
                   <ListItem><a href='#'>Glasses</a></ListItem>
                   <ListItem><a href='#'>Coffee</a></ListItem>
                   <ListItem><a href='#'>Fashion</a></ListItem>
                   <ListItem><a href='#'>Watches</a></ListItem>
                     <ListItem><a href='#'>Shoes</a></ListItem>
                     </UnorderedList>
              {/* </Box> */}
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
                   {/* <label><span>Price</span></label> */}
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

      <Box className='right-data'>
     <Box className='top-data'>
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
     <Box className='bottom-data'>
      <Box className='grid-data-details' >
      {
          products &&   products.map((el)=>{
                return <Productdata key={el.id} {...el} />
            })
        }
      </Box>
     </Box>
      </Box>

      </Box>
    </main>
















        <Box>
            <Footer />
        </Box>
    </div>
  )
}

export default Product