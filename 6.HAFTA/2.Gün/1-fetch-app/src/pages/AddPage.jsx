import { useState } from "react";
import { API_URL } from "../App";

const AddPage = (props) => {
  const [name, setName] = useState("");

  const handleAdd = () => {
    fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((response) => response.json())
      .then(() => {
        setName("");
        props.onAdd();
      });
  };
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Ekle</button>
    </>
  );
};

export default AddPage;
