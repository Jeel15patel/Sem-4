import React from "react";

function Events() {
  const mystyle = {
    color: "red",
    backgroundColor: "yellow",
  };

  function handlechange() {
    alert("Hello");
    // document.body.style.backgroundColor = "red"
  }
  return (
    <>
      {/* <button style={mystyle} onClick={handlechange}> */}
      <button style={mystyle} onDoubleClick={handlechange}>
        Click Me
      </button>
    </>
  );
}

export default Events;
