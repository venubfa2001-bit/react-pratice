import React, { useState, useEffect, Suspense } from 'react';
import {countHandler, UserContext} from './utlis';
import Child from './components/Child';
import Pratice from './components/Pratice';

const Popup = React.lazy(()=> import("./components/Popup"));

function App() {
  const [count, setCount] = useState(0);
  const [brash, setBrash] = useState(1);
  const [displayPopup, setDisplayPopup] = useState(false); 
  

  // step 1.1 define value: user
  const user = { name: "Venu", role: "Admin" };

  const parentHandler = ()=>{
      setCount(countHandler(count));
  }
  const brashHandler =()=>{
    setBrash(brash+1);
  }

  useEffect(()=>{
    if(count > 5){
      setBrash(brash+1);
     }
  },[count]);
  
  return (
    <>
     {count}
     {brash}
     <button onClick={parentHandler}>Click</button>
     <button onClick={brashHandler}>Click Brash</button>
     <div>
      {/*step 2 creating wrapper using provider and passing value to provider */}
      <UserContext.Provider value={user}>
        <Child  passingData={"Passing Data from Parent to child"} anOtherData={brash} />
      </UserContext.Provider>
     </div>
     {displayPopup && (<Suspense fallback={<div>Loading...</div>}>
      <Popup />
     </Suspense>)}
     <button onClick={()=> setDisplayPopup(true)}>Popup</button>
     <Pratice />
    </>
  )
}

export default App
