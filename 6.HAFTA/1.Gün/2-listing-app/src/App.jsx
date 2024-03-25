import React, { useState } from 'react';

const App = () => {
  const [fruits] = useState([ // useState ile fruits'u state olarak tanımlıyorsunuz.
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Cherry" }, // "Cherr" yerine "Cherry" olmalı.
  ]);

  const [searchResults, setSearchResults] = useState(fruits);

  const handleSearch = (text) => {
    const newList = fruits.filter((f) => f.name.toUpperCase().startsWith(text.toUpperCase())); // Filtreleme işlemini doğru yapıyorsunuz.
    setSearchResults(newList); // setSearchResults'i kullanarak arama sonuçlarını güncelliyorsunuz.
  };

  return (
    <>
      <input
        type="search" // "sarch" yerine "search" olmalı.
        onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        {searchResults.map((fruit) => ( // "fruits" yerine "fruit" olarak değiştirildi.
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
