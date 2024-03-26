import { useEffect, useState } from "react";
import { API_URL } from "../App";

const UpdatePage = (props) => {
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

  const handleSave = () => {
    fetch(`${API_URL}/users/${props.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => {
      props.onSave();
    });
  };

  return (
    <>
      <input
        type="text"
        value={user.name}
        onChange={(e) =>
          setUser({
            id: user.id,
            name: e.target.value,
          })
        }
      />
      <br />
      <button onClick={handleSave}>Kaydet</button>
    </>
  );
};

export default UpdatePage;
