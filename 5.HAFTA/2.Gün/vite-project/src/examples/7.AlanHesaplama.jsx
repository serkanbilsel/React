import  { useState } from 'react'



const App = () => {
const [yaricap, setYaricap] = useState(0);
const [sonuc, setSonuc] = useState(0);

const handleClick = () => {
  const alan = Math.floor(Math.PI * yaricap * yaricap);
  setSonuc(alan);
};

  return (
    <>    <h1>Alan Hesaplama</h1>

    <label>Yarıçap Giriniz</label>

    <input type="number" value={yaricap}

    onChange={(e) => setYaricap(e.target.value)} /
    >
      <br />
      <button onClick={handleClick}>Hesapla</button>
      <h1>{sonuc}</h1>
      </>


  );
};

export default App