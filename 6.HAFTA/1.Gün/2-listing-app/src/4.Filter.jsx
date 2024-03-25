import React, { useState } from 'react';

export const App = () => {
  const [winners, setWinners] = useState([
    {
      id: 1,
      award: "Best Actor",
      value: "Cillian Purphy",
    },
    {
      id: 2,
      award: "Best Picture",
      value: "Openheimer",
    },
    {
      id: 3,
      award: "Best Actress",
      value: "Emma Stone",
    },
  ]);

  const handleDelete = (id) => {
    const newList = winners.filter((item) => item.id !== id);
    setWinners(newList);
  };

  return (
    <ul>
      {winners.map((item) => (
        <li key={item.id}>
          {item.award}: {item.value}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default App;