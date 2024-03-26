import { useEffect, useState } from "react";
import AddUser from "./components/AddUser";

export const API_URL = "http://localhost:3000";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const handleOnUserAdded = () => {
    getUsers();
  };

  const getUsers = () => {
    fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  };

  return (
    <>
      <AddUser onUserAdded={handleOnUserAdded} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
