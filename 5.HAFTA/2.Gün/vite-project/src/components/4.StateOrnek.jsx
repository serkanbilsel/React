import { useState } from "react";

const App = () => {
  console.log("Rendered");
  let [sayi, setSayi] = useState(5);

  const handleClick = () => {
    setSayi(sayi + 1);
  };

  return (
    <>
      <h1>{sayi}</h1>
      <button onClick={handleClick}>Arttır</button>
    </>
  );
};

export default App;