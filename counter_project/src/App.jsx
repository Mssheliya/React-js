import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15);
  let [errmsg, setErrmsg] = useState("");

//Create Funtions ------------------------------------------------------------------------------------------------------------------------  

function AddCount(){
  if (count < 25) {
    setErrmsg("");
    setCount(count+1);
  }
  else{
    setErrmsg(`Maximum Count Number is:- 25`)
  }
}
function RemoveCount(){
  if (count > 0) {
    setErrmsg("");
    setCount(count-1);
  }
  else{
    setErrmsg(`Minimum Count Number is:- 0`)
  }
}

//Return Html Element  ------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <h1>Counter:</h1>
      <p>Current Count is:- {count}</p>
      <button onClick={AddCount}>Increase Count {count}</button> <br/><br/>
      <button onClick={RemoveCount}>Decrease Count {count}</button>
      <p>{errmsg}</p>
    </>
  )
}

export default App
