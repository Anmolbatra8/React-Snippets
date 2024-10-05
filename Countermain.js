import Usergreeting from "./Usergreeting";
import React from "react";
import Counter from "./Counter";
import {  Countercontextprovider } from "../Contexts/Countercontext";

let fname = "KLB";
 const Countermain = () => {

   
    return(
        <>
         <Countercontextprovider>

        <h2>Welcome to Contact Component ! </h2>
        <Usergreeting isLogined = {true} username = {fname} />
      
        
  

        <Counter />
        <Counter />
        <Counter />
        <Counter />
        </Countercontextprovider>
        </>
    )
}
export default Countermain;



