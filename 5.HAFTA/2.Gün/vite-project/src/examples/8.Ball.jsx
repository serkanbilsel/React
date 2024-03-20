import React, { useState } from 'react'
import './App.css'
useState




const App = () => {

  const [cap, setCap] = useState(100);
  return (
   <>

    <input 
    type="range" 
    min={100} 
    max={500} 
    onChange={(e) => setCap(e.target.value)} 
    />
    <div 
    className="ball" 
    style={{
       width: parseInt(cap),
       height: parseInt(cap),
    }}
    
    >
      {cap} px

         
    </div>


   </>
  );
};

export default App