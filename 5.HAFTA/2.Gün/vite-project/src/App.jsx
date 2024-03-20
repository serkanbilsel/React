import React, { useState } from 'react'
useState

const App = () => {
  const [vize, setVize] = useState(0);
  const [final, setFinal] = useState(0);
  const [dersNotu, setDersNotu] = useState(0);
  const [gectiMi, setGectiMi] = useState("Geçti")
  const [ortalama, setOrtalama] = useState(0)

  const hesapla = () => {
    const ortalama = parseInt(vize) * 0.4 + final * 0.7;
    setOrtalama(ortalama);

    switch (true) {
      case ortalama >= 85:
        setDersNotu("AA");
        setGectiMi("Geçti");
        break;
      case ortalama >=50:
      console.log(ortalama);
      setDersNotu("CC");
      setGectiMi("Geçti");

      default:
        setDersNotu("FF");
        setGectiMi("Kaldı");

    }
  }
  return (


    <>
      <label >Vize Giriniz</label>
      <input type="number" value={vize} onChange={e => setVize(e.target.value)} />
      <br />

      <label >Final Giriniz</label>
      <input type="number" value={final} onChange={e => setFinal(e.target.value)} />
      <br />
      <button onClick={hesapla}>Hesapla</button>
      <h1>Ortalama  : {ortalama}</h1>
      <h1>Ders Notu : {dersNotu}</h1>
      <h1>Geçti mi  : {gectiMi}</h1>
    </>
  );
};

export default App