import React, { useState } from 'react'
useState
const App = () => {
  const [boy, setBoy] = useState(0);
  const [agirlik, setAgirlik] = useState(0)
  const [sonuc, setSonuc] = useState(0)

  const hesapla = () => {
    const deger = agirlik / Math.pow(boy / 100, 2);
    setSonuc(Math.floor(deger));
  }
  return (
    <>
      <label>Ağırlık(kg): </label>
      <input type="nunmber"
        value={agirlik}
        onChange={(e) => setAgirlik(e.target.value)} />

      <label>Boy(cm): </label>
      <input type="nunmber"
        value={boy}
        onChange={(e) => setBoy(e.target.value)} />
      <br />
      <button onClick={hesapla}>Hesapla </button>
      <h1>{sonuc}</h1>

    </>
  )
}

export default App