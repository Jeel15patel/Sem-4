import React, { useState } from "react";

function FormsPra() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const SubmitHandler = (event) => {
    event.preventDefault();
    alert("WellComes " + Fname + " " + Lname);
  };
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <label>Enter your name</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => setFname(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => setLname(event.target.value)}
        />
        <button type="submit">WelCome</button>
      </form>
    </div>
  );
}

export default FormsPra;
