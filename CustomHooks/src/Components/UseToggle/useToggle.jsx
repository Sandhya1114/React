import { useState } from "react";
export default function useToggle(intailValue){
        const[value ,setValue]=useState(intailValue);
        const toggle=()=>setValue(val=>!val)
        const setTrue=()=>setValue(true);
        const setFalse=()=>setValue(false);
        return{
            value,toggle,setTrue,setFalse
        }
            
        

        
}