
import useCounter from "./useCounter"
export default  function CounterComponent(){
    const{count,increment,decrement,reset}=useCounter(0);
    
     return(
       <div>
             <h1>counter:{count}</h1>
             <button onClick={increment}>+</button>
             <button onClick={decrement}>-</button>
             <button onClick={reset}>reset</button>
       </div>  
     ) 
}