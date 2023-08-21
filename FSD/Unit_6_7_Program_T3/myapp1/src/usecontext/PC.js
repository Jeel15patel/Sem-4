// Creat Main/Prent File Name is parseConnectionUrl.js
// Pass firstname & lastname for pc.js file to c2.js file now display wellcome message in browser

import React, { createContext } from "react";
import C1 from "./C1";

const FirstName = createContext();
const LastName = createContext();

function PC() {
  return (
    <>
      <FirstName.Provider value={"Jeel"}>
        <LastName.Provider value={"Patel"}>
          <C1 />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default PC;
export { FirstName, LastName };