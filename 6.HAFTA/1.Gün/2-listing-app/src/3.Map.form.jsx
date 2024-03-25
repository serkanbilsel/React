import { useState } from "react";

const App = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "cherry"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    setFruits([...fruits, data.name]);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="name" name="name" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
};

export default App;