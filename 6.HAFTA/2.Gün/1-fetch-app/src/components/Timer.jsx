import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Abone olma işlemi
    const timer = setInterval(() => {
      setCount((prevCount) => {
        console.log(prevCount);
        return prevCount + 1;
      });
      console.log("Test");
    }, 1000);

    // Aboneliği iptal etme işlemi
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>{count}</h1>;
};

export default Timer;
