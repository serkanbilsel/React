import React, { useState } from 'react'
useState



const App = () => {

  const [sayi, setSayi] = useState(0)
  const handleClick=() => {
    setSayi(sayi +1);
  };

  return (
   <>
  <button onClick={handleClick}>Arttır</button>
  <h2>Say: {sayi}</h2>
   </>
  );
};

export default App