import React, { useEffect, useState } from "react";

const Pra11 = () => {
  const [ctime, setCtime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCtime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

export default Pra11;
