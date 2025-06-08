import { useState } from "react";
export default function useForm(startingVal,Submit){
    const[formVal,setFormVal]=useState(startingVal);
    function changeInput(e){
        const name=e.target.name;
        const value=e.target.value;
        setFormVal((formVal)=>(
            {
                ...formVal,
                [name]:value
            }
        ))
 
    }
    // / This runs when you press submit
  function submitForm(event) {
    event.preventDefault(); 
    Submit(formVal); 
  }
    function clearForm(){
        setFormVal(startingVal);
    }
    return {
    formVal,
    changeInput,
    submitForm,
    clearForm
  };
}