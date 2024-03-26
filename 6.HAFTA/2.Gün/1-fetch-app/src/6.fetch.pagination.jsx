import { useState } from "react";
import User from "./components/User";

const App = () => {
  const [userId, setUserId] = useState(1);

  const handleUserChange = (newUserId) => {
    if (newUserId === 0) {
      setUserId(10);
    } else if (newUserId === 11) {
      setUserId(1);
    } else {
      setUserId(newUserId);
    }
  };

  return (
    <div>
      <button onClick={() => handleUserChange(userId - 1)}>{"<"}</button>
      <span> {userId} </span>
      <button onClick={() => handleUserChange(userId + 1)}>{">"}</button>
      <br />
      <User userId={userId} />
    </div>
  );
};

export default App;
