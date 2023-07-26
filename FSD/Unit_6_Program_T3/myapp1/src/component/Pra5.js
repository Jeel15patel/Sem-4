import React, { useState } from "react";

function Pra5() {
  const [button, setText] = useState("Hide");
  const [name, settext] = useState("Hello");
  function TextChange() {
    if (button === "Hide") {
      setText("Show");
      settext("----");
    } else {
      setText("Hide");
      settext("Hello");
    }
  }
  return (
    <>
      <h1>{name}</h1>
      <button onClick={TextChange}>{button}</button>
    </>
  );
}

export default Pra5;
