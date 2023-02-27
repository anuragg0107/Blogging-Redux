import { Box,Text,Image, Button } from '@chakra-ui/react'
import React, {  useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props){
const {className,style,onClick}=props
return(
        <div className={className}
        style={{...style, display:"block",right:"-8px",
        backgroundColor:"gray", borderRadius:"50%" }}
    onClick={onClick}  > </div>
    )
}

function SamplePrevArrow(props){
    const {className,style,onClick}=props
    return(
        <div className={className}
        style={{...style, display:"block",right:"-37px",
        backgroundColor:"gray", borderRadius:"50%"}}
     onClick={onClick}  > </div>
    )
}

const HotPick = () => {
    const [data,setData]=useState([])
     const navigate=useNavigate()
    // const breakpoints={
    //     sm:"320px",
    //     md:"786px",
    //     lg:"1001px",
    //     xl:"1100px",
    //     "2xl":"1600px"
    // }

    const boxStyle={
        display:"flex",
        alignItem:"center",
        justifyContent:"center",
        boxSize:"250px",
        // textShadow:"0 0 20px black",
        fontWeight:"400",
        fontSize:"20px",
        color:"#000"
    }
    let settings={
        infinite:true,
        speed:500,
        slidesToShow:5,
        slidesToScroll:1,
        initialSlide:0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive:[
            {
                breakpoint:1281,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:1,
                    infinite:true
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint:600,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:2,
                    initialSlide:2,
                    infinite:true
                },
            },
            {
                breakpoint:480,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                    infinite:true,
                    initialSlide:1,
                },
            },
        ],
    };
  
    useEffect(()=>{
    axios.get("https://trips-villas.onrender.com/posts").then((res)=>{
        setData(res.data)
    })
    },[])

  return (
    <>
    <Box  w={"94%"} m="auto" pl={{base:"5rem",lg:"2rem"}}
    justifyContent="space-between" gap="40px" mb={"6rem"}>
    <Slider {...settings}>
   {data.map((el)=>{
    return(
        <Box maxW={"250px"} _hover={{cursor:"pointer"}} maxH="140px" sx={boxStyle}
        key={el.id} onClick={()=>navigate("/products")}>
        <Image src={el.img}
            alt={el.location} filter="auto" brightness={"70%"}
        width="90%" height={"140px"}  />
         <Text>{el.location} </Text>
        <Text fontSize={"14px"}>  {el.text} </Text>
        </Box>
    )})}
    </Slider>
    </Box>
    </>
  )
}

export default HotPick