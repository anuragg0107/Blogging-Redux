import {legacy_createStore,applyMiddleware,compose} from "redux"
// import thunk from "redux-thunk"

import authReducer from "../Reducer/AuthReducer"

const dataMiddleware=(store)=>(next)=>(action)=>{
   if(typeof action ==="function"){
    return action(store.dispatch, store.getState)
   }
   return next(action)
}
const store=legacy_createStore(authReducer,
   compose( applyMiddleware(dataMiddleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():(f)=>f))
export default store