import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }
}

function Ur1() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Estate {state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        Click Me
      </button>
    </>
  );
}

export default Ur1;
