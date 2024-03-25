import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Jhon",
    },
  ]);

  const handleAdd = () => {
    if (!name.trim()) {
      alert('Please enter a valid name');
      return;
    }

    const newPerson = {
      id: Math.random().toString(36).substring(2, 9),
      name: name,
    };

    setPeople([...people, newPerson]);
    setName("");
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
