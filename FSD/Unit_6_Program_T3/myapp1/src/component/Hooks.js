import React, { useState } from "react";
function Us1() {
  const [name, setName] = useState(0);
  function xyz() {
    setName(name + 1);
  }
  return (
    <>
      <h1>You Click {name}</h1>
      <button onClick={xyz}>Click Me</button>
    </>
  );
}

export default Us1;
