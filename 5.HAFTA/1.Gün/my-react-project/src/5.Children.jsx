import React from 'react'




const Button = (props) => {
  return  <button>{props.children}</button>;
};

const App = () => {
  return (
    <div>
      <button>
        <span>Click Me</span>
      </button>
    </div>
  );
};


export default App