import { useState } from "react";

const App = () => {
  const [metin, setmetin] = useState("");
 
  const handleChange = (e) => {
   setmetin(e.target.value);
  };
 
  return (
   <>
   <h1>{metin}</h1>
   <input type="text" value={metin} onChange={handleChange} />
   </>
  );
 };
 
 
 export default App