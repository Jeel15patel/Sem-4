// Using UseEffect
// 1. Add 2 Buttons and increment Count by 1 with each click
// 2. Display alert box as an effect on a specific conditon
//    - Effect will be triggered only when page is rendered for the first time.
//    - Effect will be triggered when button is clicked

import React, { useEffect, useState } from "react";

const Us1 = () => {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        alert("Clicked");
    }, []);

    return (
    <>
        <button onClick={() => { setCount(count + 1);}}> 
            Count {count} 
        </button>
        <br></br>
        <button onClick={() => { setCalculation(calculation + 1);}}>
            Calculate {calculation}
        </button>
    </>
    );
};

export default Us1;
