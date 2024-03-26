import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [count]); // Deps array

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App;
