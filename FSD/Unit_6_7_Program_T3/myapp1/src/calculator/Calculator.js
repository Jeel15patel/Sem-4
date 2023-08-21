import React, { createContext } from "react";
import Calculator1 from "./Calculator1";

const Number1 = createContext();
const Number2 = createContext();

function Calculator() {
  return (
    <>
      <Number1.Provider value={10}>
        <Number2.Provider value={20}>
          <Calculator1 />
        </Number2.Provider>
      </Number1.Provider>
    </>
  );
}

export default Calculator;
export { Number1, Number2 };