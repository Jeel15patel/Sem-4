import React,{useContext} from "react";
import {Number1,Number2} from "./Calculator";

function Calculator3(){
    const num1 = useContext(Number1);
    const num2 = useContext(Number2);
    return(
        <>
            <h1>Sum of {num1} and {num2} is {num1*num2}</h1>
        </>
    )
}

export default Calculator3;