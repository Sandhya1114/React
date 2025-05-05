import { useState } from 'react'
import './App.css'

function App() {
  const addValue=()=>{

    console.log("value added",counter=counter+1)
  }
  let counter =5;
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
