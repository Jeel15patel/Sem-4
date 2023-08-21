// create react js app to increase values by two by clicking on button + and decrease the values by 1 by clicking on 
// button - , intialize the values by using usereducer.

import React, { useReducer } from "react";


function reducer(state, action) {
    if (action.type === "increment") {
        return state + 2;
    }
    if (action.type === "decrement") {
        return state - 1;
    }
}

function Pra9() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <h1>Start Value {state}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>
                Click Me +
      </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Click Me -
      </button>
        </>
    );
}

export default Pra9;
