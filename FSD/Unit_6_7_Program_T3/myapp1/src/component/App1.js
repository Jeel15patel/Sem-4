import React from "react";
import "./App1.css";

const App1 = () => {

  const name = "Jeel Patel";
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <>
      <div id="div1">
        <h1>Hello This is React file is conncet Component</h1>
        {/* --------------------- */}
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>Jeel</td>
            <td>Patel</td>
          </tr>
          <tr>
            <td>Jeel</td>
            <td>Patel</td>
          </tr>
        </table>
        {/* --------------------- */}
        <h1>My Name is {name}</h1>
        <h1>Today Date is {date}</h1>
        <h1>Today Time is {time}</h1>
        {/* --------------------- */}
      </div>
    </>
  );
};

export default App1;
