import { useState } from "react";

const App = () => {
  const [sayi, setSayi] = useState(0);
  const [sonuc, setSonuc] = useState(0);

  const handleClick = () => {
    setSonuc(sayi * sayi);
  };

  return (
    <>
      <label>Sayı giriniz</label>

      <input type="number"
        value={sayi}
        onChange={(e) => setSayi(e.target.value)} />
      <br />
      <button onClick={handleClick}>Karesini Hesaplama</button>
      <h1>{sonuc}</h1>
    </>
  );
};


export default App