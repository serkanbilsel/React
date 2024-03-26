import { useEffect, useState } from "react";
import { API_URL } from "../App";

const HomePage = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  };
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => props.onDelete(user.id)}>Sil</button>
          <button onClick={() => props.onEdit(user.id)}>Düzenle</button>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
