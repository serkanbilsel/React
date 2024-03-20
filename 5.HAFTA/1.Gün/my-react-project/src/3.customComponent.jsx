import React from 'react'

const App = () => {
  const gender = "male";

  const handleCinsiyet = () => {
    if ( gender = "male") {
      return <h1>Erkek</h1>;
    } else {
      return <h1>Kadın</h1>;
    }
  }

  return (
    <div>
      {/*ternary operator */}
      {gender === "male" ? <h1>Erkek</h1> : <h1>Kadın</h1>}
    </div>
  );
};

export default App;