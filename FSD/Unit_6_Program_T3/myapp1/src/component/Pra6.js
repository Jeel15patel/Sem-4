import React, { useState } from "react";
import Img1 from "./Img1.jpg";
import Img2 from "./Img2.jpg";

function Pra6() {
  const [img, setImg] = useState(Img1);
  const [button, setButton] = useState("Show");
  function ImgChange() {
    if (button === "Show") {
      setImg(Img2);
      setButton("Hide");
    } else {
      setImg(Img1);
      setButton("Show");
    }
  }
  return (
    <>
      <img src={img} alt="img" />
      <button onClick={ImgChange}>{button}</button>
    </>
  );
}

export default Pra6;
