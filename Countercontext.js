import { createContext, useState } from "react";

export const Countercontext = createContext(null);

export const Countercontextprovider = (props) => {
     const [count,setCount] = useState(11);
return (
     <Countercontext.Provider value={{count,setCount,type:"abc"}}>
     {props.children}
     </Countercontext.Provider>
)
}
