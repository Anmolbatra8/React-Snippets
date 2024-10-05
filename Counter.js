//To Implement CONTEXT API & updating count of counter value whenever 'increment' or 
// decrement' button is clicked without passing props

import { useContext } from "react";
import { Countercontext } from "../Contexts/Countercontext";
const Counter = () => {
 const {type,count,setCount} = useContext(Countercontext);
 console.log("Type: ",type);
 console.log("Count: ",count);
 
 return(
    <>
    <button onClick={(e)=> {
      setCount(count+1)
    }}>Increment</button>

    
    <button 
    onClick={(e)=> {
      setCount(count-1)
    }}
    >Decrement</button>
    < br />
    </>
 )
}

export default Counter;
