import React, { useState } from "react";
function Us1() {
  const [name, setName] = useState(0);
  function xyz() {
    setName(name + 1);
  }
  return (
    <>
      <button onClick={xyz}>Click Me</button>
      <h1>You Click {name}</h1>
    </>
  );
}

export default Us1;
