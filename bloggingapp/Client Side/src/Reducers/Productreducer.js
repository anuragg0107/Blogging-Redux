const ProductReducer=(state,action)=>{
    switch(action.type){
        case 'GET_PRODUCT_REQUEST':return {
            ...state,
        loading:true,
        error:false,
        }
        case "GET_PRODUCT_SUCCESS":return{
            ...state,
            loading:false,
            products:action.payload,
            error:false,
        }
        case "GET_PRODUCT_FAILURE":return{
         ...state,
         loading:false,
         error:true
        }
        default: return state
    }
}
export default ProductReducer