import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/Productreducer";

const AppContext=createContext()
const API=`https://product-api-46mq.onrender.com/products`
const initialState={
    loading:false,
    error:false,
    products:[],
    featureProducts:[],
    grid_view:[]
}

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    const getProducts=async(url)=>{
        dispatch({type:"GET_PRODUCT_LOADING"})
    try{
        const res= await axios.get(url)
        const products=await res.data;
        dispatch({type:"GET_PRODUCT_SUCCESS",payload:products})
        // console.log(products)
    }
    catch(err){
        dispatch({type:'GET_PRODUCT_FAILURE'})
    }
    
    }
    useEffect(()=>{
        getProducts(API)
    },[])
  return (
    <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
  )
}

const useProductContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,useProductContext}