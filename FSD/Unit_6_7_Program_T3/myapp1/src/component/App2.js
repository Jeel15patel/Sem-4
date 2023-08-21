import React from "react";

const App2 = (props) => {
  return (
    <>
      <ul>
        <li>Name : {props.name} </li>
        <li>Marks : {props.marks} </li>
        <li>Age : {props.age} </li>
      </ul>
    </>
  );
};

export default App2;
