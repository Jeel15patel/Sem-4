import React from "react";
import img1 from "./Img1.jpg";
import img2 from "./Img2.jpg";
import img3 from "./Img3.jpg";

function Map2() {
  const imgages = [{ id: 1, pic: img1 },{ id: 2, pic: img2 },{ id: 3, pic: img3 }];
    return (
        <>
            {imgages.map((value) => { 
                return (
                    <>
                        <img src={value.pic} alt="Car"></img>
                    </>
                );
            })}
        </>
    )
}

export default Map2;
