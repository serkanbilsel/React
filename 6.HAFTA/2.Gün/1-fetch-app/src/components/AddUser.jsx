import { useState } from "react";
import { API_URL } from "../App";

const AddUser = (props) => {
  const [name, setName] = useState("");

  const handleAdd = () => {
    fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    }).then(() => {
      setName("");
      props.onUserAdded();
    });
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>
    </>
  );
};

export default AddUser;
