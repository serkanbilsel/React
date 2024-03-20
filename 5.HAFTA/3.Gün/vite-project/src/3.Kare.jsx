import React, { useState } from 'react';

const App = () => {
  const [sayi, setSayi] = useState(0);
  const [sonuc, setSonuc] = useState(0);

  const hesapla = () => {
    const deger = parseInt(Math.pow(sayi, 2));
    setSonuc(deger);
  };

  return (
    <>
      <input type="number" value={sayi} onChange={(e) => setSayi(e.target.value)} />
      <button onClick={hesapla}>Hesapla</button>
      <h2>Sonuç: {sonuc}</h2>
    </>
  );
};

export default App;
