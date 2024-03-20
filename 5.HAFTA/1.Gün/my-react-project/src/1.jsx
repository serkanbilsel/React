import React from 'react'

const App = () => {
  const helloWorld = 'Hello world!';

  const handleClick = () => {
    alert('Hello, world!');
  };

  const alanHesapla = () => {
    return "Alan hesaplandı: " + 3 * 5 + "m2";
  };

  return (
    <div>
      <h1>{helloWorld}</h1>
      <p>4'ün klaresi (4*4)</p>
      <p>Adım {"Utku"}</p>
      <p>Erkek mi {true ? "erkek" : "değil"}</p>
      <p>{alanHesapla()}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;