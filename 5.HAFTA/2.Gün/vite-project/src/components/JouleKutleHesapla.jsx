import React, { useState } from 'react'
useState

const App = () => {
  const [kutle, setKutle] = useState(0);
  const [yukseklik, setYukseklik] = useState(0);
  const [sonuc, setSonuc] = useState(0);

  const handleClick = () => {
    const potansiyel = kutle * 9.81 * yukseklik;
    setSonuc(potansiyel);
  };

  return (
    <>
    <label>Kütle giriniz</label>
    <input type="number" value={kutle} onChange={(e) => setKutle(e.target.value)} />
    <br />
    <label>Yüksekliği giriniz giriniz</label>
    <input type="number" value={yukseklik} onChange={(e) => setYukseklik(e.target.value)} />
    <br />
    <button onClick={handleClick}>Hesapla</button>
    <h1>{sonuc} Joule</h1>
    </>
  
  );
};

export default App