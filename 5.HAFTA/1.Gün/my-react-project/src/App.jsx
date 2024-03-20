import React from 'react'
import "./App.css";


const Button = (props) => {
  return (
   <button className="myButton">{props.children}</button>
  )
};

const App = () =>
{
  return (
    <>
    <button>Click Zafer</button>
    </>
  );
};

export default App