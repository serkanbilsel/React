import React, { useState } from 'react';

const EhliyetHesaplayici = () => {
  const [dogumYili, setDogumYili] = useState('');
  const [ehliyetDurumu, setEhliyetDurumu] = useState('');
  const [hata, setHata] = useState('');

  const hesapla = () => {
    if (!dogumYili.trim()) {
      alert('Bilgilerinizi kontrol ediniz.');
      return;
    }

    const yas = new Date().getFullYear() - parseInt(dogumYili);

    if (yas >= 18) {
      setEhliyetDurumu('Ehliyet alabilir');
    } else {
      setEhliyetDurumu('Ehliyet alamaz');
    }
    setHata('');
  };

  return (
    <div>
      <label>
        Doğum Yılı:
        <input type="number" value={dogumYili} onChange={(e) => setDogumYili(e.target.value)} />
      </label>
      <br />
      <button onClick={hesapla}>Hesapla</button>
      <br />
      {ehliyetDurumu && <p>{ehliyetDurumu}</p>}
      {hata && <p>{hata}</p>}
    </div>
  );
};

export default EhliyetHesaplayici;
