import React, { useState } from 'react';

export const App = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Cherry" },
    { id: 3, name: "Banane" },
  ]);

  const handleEdit = (id, newName) => {
    const updatedFruits = fruits.map(fruit => {
      if (fruit.id === id) {
        return { ...fruit, name: newName };
      }
      return fruit;
    });
    setFruits(updatedFruits);
  };

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <input
            type="text"
            value={fruit.name}
            onChange={(e) => handleEdit(fruit.id, e.target.value)}
          />
          <button onClick={() => handleEdit(fruit.id, fruit.name)}>Kaydet</button>
        </li>
      ))}
    </ul>
  );
};

export default App;
