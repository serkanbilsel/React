import { useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  const [isTimerShowing, setIsTimerShowing] = useState(true);

  return (
    <>
      <button onClick={() => setIsTimerShowing(false)}>Timerı gizle</button>

      {isTimerShowing && <Timer />}
    </>
  );
};

export default App;
