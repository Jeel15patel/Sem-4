import React from "react";

function filter() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newarr = arr.filter((num) => {
    if (num%2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  var arr1 = arr.join(",");
  var arr2 = newarr.join(",");
  return (
    <div>
      <h2>{arr1}</h2>
      <h2>After Filter {arr2}</h2>
    </div>
  );
}

export default filter;
