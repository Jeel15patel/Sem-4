import React, { useState } from "react";

function Pra7() {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  function JointNames() {
    return FName + " " + LName;
  }
  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        onInput={(event) => setFName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onInput={(event) => setLName(event.target.value)}
      />
      <h1>Hello {JointNames()}</h1>
    </>
  );
}

export default Pra7;
