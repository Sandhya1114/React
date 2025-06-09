import {useState} from "react";
export default function UseState(){
    const [info,setInfo]=useState({
        name:'Sandhya Rana',
        language:'React',
        Course:'B.tech',
        Year:'3rd '
    })//instead of creating multiple state use object for it
    const handleClick=()=>{
           setInfo((prev)=>{
            return {...prev,Year:'4th'}
           })
    }//prev give previous whole values rather than replacing that
    return (
        <>
         <h1>hello my name is {info.name}</h1>
         <h3>Currently I'm learining {info.language}</h3>
         <p>I'm in {info.Course} {info.Year} year</p>
         <button onClick={handleClick}>Click me modification</button>
        </>
    )
}