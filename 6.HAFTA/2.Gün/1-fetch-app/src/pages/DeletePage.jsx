import { useEffect, useState } from "react";
import { API_URL } from "../App";

const DeletePage = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/users/${props.userId}`)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
      });
  }, [props.userId]);

  if (!user) {
    return <>Loading...</>;
  }

  const handleDelete = () => {
    fetch(`${API_URL}/users/${props.userId}`, {
      method: "DELETE",
    }).then(() => {
      props.onDelete();
    });
  };

  return (
    <>
      <span>{user.name}i silmek istiyor musunuz?</span>
      <br />
      <button onClick={handleDelete}>Sil</button>
    </>
  );
};

export default DeletePage;
