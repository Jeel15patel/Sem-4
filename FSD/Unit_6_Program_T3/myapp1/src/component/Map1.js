import React from "react";

function Map1() {
  const array = ["Jeel", "Dwij", "Raj", "Rajesh"];
  return (
    <>
      {array.map((value) => {
        return (
          <>
            <h3>Element:{value}</h3>
            <h3>Element:{value.toUpperCase()}</h3>
          </>
        );
      })}
    </>
  );
}

export default Map1;
