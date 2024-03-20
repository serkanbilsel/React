import React, { useState } from 'react';

const App = () => {
  const [sonuc, setSonuc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const strSonuc = JSON.stringify(data, null, 2);
    setSonuc(strSonuc);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        gap: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <label>Adınız :</label>
      <input type="text" name="ad" placeholder="Adınız" />
      <div>
        <label>Cinsiyet :</label>

        <div>
          <input type="radio" id="male" name="gender" value={"male"} />
          <label htmlFor="male">Erkek</label>
        </div>
        <div>
          <input type="radio" id="female" name="cinsiyet" value={"female"} />
          <label htmlFor="female">Kadın</label>
        </div>
      </div>
      <button type="submit" value={"JSON Oluştur"}>Gönder</button>
      <span>{sonuc}</span>
    </form>
  );
};

export default App;
