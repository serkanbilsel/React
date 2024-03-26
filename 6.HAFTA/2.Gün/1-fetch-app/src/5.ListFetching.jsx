import React, { useEffect, useState } from 'react'
useState

const API_URL = "https://jsonplaceholder.typicode.com"

export const App = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));

  }, []);


  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};


export default App;