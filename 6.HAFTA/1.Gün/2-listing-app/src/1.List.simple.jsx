import React, { useState } from 'react'
useState

export const App = () => {
  const people = [
    {
      id: 1,
      name: "Zafer",
    },
    {
      id: 2,
      name: "Ahmet",
    },
  ];
  return (

    <ul>
      {people.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>

  );
};

export default App;