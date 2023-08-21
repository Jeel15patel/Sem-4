// Write a program take two input from user Fname and Lname and display it on screen by button using useState() hook.

import React, { useState } from "react";

function Pra7() {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");

  function JointNames() {
    return FName + " " + LName;
  }

  const handleButtonClick = () => {
    alert("Joint Name: " + JointNames());
    setFName(""); // Clear the first name input field
    setLName(""); // Clear the last name input field
  };

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={FName}
        onInput={(event) => setFName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={LName}
        onInput={(event) => setLName(event.target.value)}
      />

      <button onClick={handleButtonClick}>Show Joint Name</button>
    </>
  );
}

export default Pra7;
