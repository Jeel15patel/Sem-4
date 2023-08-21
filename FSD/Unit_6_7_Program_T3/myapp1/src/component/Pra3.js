import React, { useState } from "react";

function Pra3() {
  const [num, setNum] = useState(0);
  function inc() {
    if (num < 10) {
      setNum(num + 1);
    }
  }
  function dec() {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  return (
    <>
      <h1>Number= {num}</h1>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </>
  );
}

export default Pra3;
