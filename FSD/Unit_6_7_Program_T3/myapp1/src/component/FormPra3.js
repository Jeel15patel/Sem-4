import React, { useState } from "react";

function FormPra3() {
  const [selectedTopping, setSelectedTopping] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select Pizza Topping:</h2>
      <label>
        <input
          type="radio"
          value="regular"
          checked={selectedTopping === "regular"}
          onChange={(e) => {
            setSelectedTopping(e.target.value);
          }}
        />
        Regular
      </label>
      <label>
        <input
          type="radio"
          value="medium"
          checked={selectedTopping === "medium"}
          onChange={(e) => {
            setSelectedTopping(e.target.value);
          }}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          value="large"
          checked={selectedTopping === "large"}
          onChange={(e) => {
            setSelectedTopping(e.target.value);
          }}
        />
        Large
      </label>
      <br />
      <h2>You select {selectedTopping}</h2>
    </form>
  );
}

export default FormPra3;
