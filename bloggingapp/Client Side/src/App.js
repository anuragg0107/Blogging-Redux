import React,{ lazy, Suspense } from 'react';
import "./Global.css"
import Loader from './Components/Loader/Loader';
const AllRoutes= lazy(()=>import("./Components/Routes/AllRoutes"))
function App() {
  return (
    <div className="App">
    <Suspense 
    fallback={
         <div>
          <Loader />
         </div>
    }
    >
      <AllRoutes />
    </Suspense>
    </div>
  );
}

export default App;
