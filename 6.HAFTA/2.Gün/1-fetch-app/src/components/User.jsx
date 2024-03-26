import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com";

const User = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/users/${props.userId}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, [props.userId]);

  if (user === null) return null;

  return (
    <ul>
      <li>{user.id}</li>
      <li>{user.name}</li>
      <li>{user.email}</li>
    </ul>
  );
};

export default User;
