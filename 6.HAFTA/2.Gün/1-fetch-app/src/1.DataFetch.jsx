import React, { useEffect, useState } from 'react'
useState

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [count]); // deps array



  return (
    <div>
      <h1>Conunt {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App;