
import useToggle from "./useToggle";
export default function ToggleComponent(){
   const{value,toggle,setTrue,setFalse}=useToggle(false)
        const displayValue = value ? 'True' : 'False';
    return(
    
       <div>
        <h1>hello</h1>
            <div>{displayValue}</div>
            <button onClick={toggle}>Toggle</button>
            <button onClick={setTrue}>True</button>
            <button onClick={setFalse}>False</button>
       </div>
    )
}