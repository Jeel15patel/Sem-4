// WAP to form with Username ,age ,email ,password ,confirm password when user click on submit button then show all data in alert box with
// Username ,age ,email ,password ,confirm password

import React, { useState } from "react";

function Pra12() {
  const [UserName, setUserName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Password === ConfirmPassword) {
      alert(`UserName: ${UserName} // Age: ${Age} // Email: ${Email}`);
    } else {
      alert("Password is Wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Enter UserName:</h4>
      <input
        type="text"
        value={UserName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <h4>Enter Age:</h4>
      <input
        type="text"
        value={Age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <h4>Enter Email:</h4>
      <input
        type="text"
        value={Email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <h4>Enter Password:</h4>
      <input
        type="text"
        value={Password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <h4>Enter ConfirmPassword:</h4>
      <input
        type="text"
        value={ConfirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Pra12;
