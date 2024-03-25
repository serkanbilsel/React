import React, { useState } from 'react';

const App = () => {
  const [cars, setCars] = useState([
    {
      id: "1",
      brand: "Ford",
    },
    {
      id: "2",
      brand: "Chevrolet",
    },
  ]);

  const handleDelete = (id) => {
    const newList = (cars.filter(car => car.id !== id));
    setCars(newList);
  };

  return (
    <div>

      <ul>

        {cars.map((car) => (
          <li key={car.id}>
            {car.brand}
            <button onClick={() => handleDelete(car.id)}>Sil</button>
          </li>

        ))}

      </ul>
    </div>
  );
};

export default App;
