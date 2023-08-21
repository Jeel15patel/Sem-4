// Using UseEffect
// 1. Add 2 Buttons and increment Count by 1 with each click
// 2. Display alert box as an effect on a specific conditon
//    - Effect will be triggered only when page is rendered for the first time.
//    - Effect will be triggered when button is clicked

import React, { useEffect, useState } from "react";

const Us1 = () => {

    const[count,setCount]=useState(0)
    const[calculator,setCal]=useState(0)

    useEffect(()=>{alert("Clicked.")},[count]);

    const changeCount=()=>{
        setCount(count+1)
    };
    const changeCalc=()=>{
        setCal(calculator+1)
    };


    return(
        <>
        <button onClick={changeCount}>Button A {count}</button><br></br>
        <button onClick={changeCalc}>Button B {calculator}</button>
        </>
    )
};

export default Us1;


// function UE1(){

    

// }

// export default UE1
