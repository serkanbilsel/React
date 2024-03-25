import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Jhon",
    },
  ]);

  const handleAddClicked = () => {
    if (!name.trim()) {
      alert('Please enter a valid name');
      return;
    }

    const newPerson = {
      id: people.length + 1,
      name: name,
    };

    setPeople([...people, newPerson]);
    setName('');
  };

  return (
    <>
      <h1>Eklenen isimler</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAddClicked}>Add</button>
    </>
  );
};

export default App;
