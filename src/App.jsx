import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=>{
    setCounter(counter=counter+1)
    console.log("value added",counter)
    // counter=counter+1
    // setCounter(counter)
  }
  
  return (
    <>
     <h1>hello this snadhya</h1>
     <p>counter value : {counter}</p>
     <button
      onClick={addValue}
     >
      add value {counter} </button>
     <button>remove value {counter}</button>
    </>
  )
}

export default App
