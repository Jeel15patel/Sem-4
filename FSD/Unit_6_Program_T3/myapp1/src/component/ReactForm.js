import React, { useState } from "react";

function FormsPra() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Textarea, setTextarea] = useState("");
  const SubmitHandler = (event) => {
    event.preventDefault();
    alert("WellComes " + Fname + " " + Lname);
    alert("WellComes " + Textarea);
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
        <br></br>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => setLname(event.target.value)}
        />
        <br></br>
        <textarea placeholder="Text_Area" onChange={(event) => setTextarea(event.target.value)} />
        <br></br>
        <button type="submit">WelCome</button>
      </form>
    </div>
  );
}

export default FormsPra;
