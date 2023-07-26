import React, { useState } from "react";

function Pra4() {
  const [text, setText] = useState("L J Univercity");
  const [color, setColor] = useState("black");
  function TextContainChange() {
    setText("Wellcom Student to L J Univercity");
    setColor("Black");
    if (text === "Wellcom Student to L J Univercity") {
      setText("L J Univercity");
      setColor("black");
    }
  }
  function TextColorChange() {
    setColor("Red");
    if (color === "Red") {
      setColor("black");
    }
  }
  return (
    <>
      <h1 style={{ color: color }}>Contain= {text}</h1>
      <button onClick={TextContainChange}>Text</button>
      <button onClick={TextColorChange}>Color</button>
    </>
  );
}

export default Pra4;
