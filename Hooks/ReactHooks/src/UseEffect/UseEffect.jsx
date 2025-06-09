import { useEffect, useState } from "react";

export default function UseEffect(){
    const [count,setCount]=useState(0)
    const [name,setname]=useState('sandhya')
    useEffect(()=>{
        setTimeout(()=>{
            setCount(prev=>prev+1);
        },2000)
    },[count,name])
    return(
        <>
         <h1 >my count is increasing by {count}</h1>
        </>
    )
}