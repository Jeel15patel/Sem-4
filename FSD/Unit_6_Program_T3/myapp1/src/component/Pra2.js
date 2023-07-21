import React from "react";

function Pra2() {
  const array = [1,2,3,4,5];
  return (
    <>
      {array.map((value) => {
        return (
          <>
            <h3>Element {value} * 5 = {value * 5}</h3>
          </>
        );
      })}
    </>
  );
}

export default Pra2;
