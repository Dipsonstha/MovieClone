import  { useEffect, useState } from 'react';
import './App.css';

import MyRouter from './MyRouter';

const App = () => {
  const name = null;
  const [isUserLogin, stateIsUserLogin] = useState(false);
  const [state,changeState] = useState(0);

useEffect(()=>{
  alert('page render')
},[]);
  const handleLogin = () =>{
    stateIsUserLogin(!isUserLogin)
  }
  const dashboard = ()=>{
    return (<div>DashBoard</div>)
  }
  return (
    <>
    <div className="App">
    <h1> {isUserLogin?(<><h1>welcome to the user dashboard</h1>{dashboard()}</>):(<><h1>user login btn</h1><button onClick ={handleLogin} className='btn btn-primary'>Login </button></>)}</h1>

    {state > 0  && (<button onClick={()=>changeState((prevCount)=>prevCount-1)}>-</button>)}
    <span>{state}</span>
    {state >= 0  && (<button onClick={()=>changeState((prevCount)=>prevCount+1)}>+</button>)}
    </div>
    {/* <MyRouter/> */}
    </>
  );
}

export default App;
