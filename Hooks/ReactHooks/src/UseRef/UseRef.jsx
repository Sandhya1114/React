import { useRef } from "react"

export default function UseRef(){
    const inpEle=useRef()
    const HnadleInput=()=>{
        inpEle.current.style.background="red";
    }
    return(
        <>
         <input type="text" ref={inpEle}/>
         <button onClick={HnadleInput}>Change Color</button>
        </>
    )
}