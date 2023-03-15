import React from 'react'
import {Box} from "@chakra-ui/react"
import { useProductContext } from '../../Context/Productcontext'
import Productdata from './Productdata'
const Content = () => {
    const {loading,products}=useProductContext()
    console.log(products)
    if(loading){
        return <div>...loading</div>
    }
  return (
    <>
     <Box className='bottom-data'>
      <Box className='grid-data-details' >
    {/* <InfiniteScroll> */}
        {
          products &&   products.map((el)=>{
                return <Productdata key={el.id} {...el} />
            })
        }
    {/* </InfiniteScroll> */}
      </Box>
     </Box>
    </>
  )
}

export default Content