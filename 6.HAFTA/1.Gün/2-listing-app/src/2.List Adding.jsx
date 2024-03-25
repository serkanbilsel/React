import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState([]);
  const handleAddClicked = () => {
    setPeople([
      ...people,
      {
        id: people.length,
        name: name,
      },
    ]);
    setName("");
  }
  return (
    <>
      <input
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAddClicked}>Add</button>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App