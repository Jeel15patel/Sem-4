// To incress the value by 5 while click on button start value is 20 use useReduces to perform task 


import React, { useReducer } from "react";

// function reducer(state, action) {
//     if (action.type === "increment") {
//         return state + 5;
//     }
// }

// function Pra8() {
//     const [state, dispatch] = useReducer(reducer, 20);
//     return (
//         <>
//             <h1>Start Value {state}</h1>
//             <button onClick={() => dispatch({ type: "increment" })}>
//                 Click Me
//       </button>
//         </>
//     );
// }

// -------------------------------------------

function reducer(state, action) {
    if (action.type === "increment") {
        return state - 5;
    }
}

function Pra8() {
    const [state, dispatch] = useReducer(reducer, 100);
    return (
        <>
            <h1>Start Value {state}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>
                Click Me
      </button>
        </>
    );
}

export default Pra8;