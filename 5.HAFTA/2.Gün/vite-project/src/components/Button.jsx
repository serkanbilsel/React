import React from 'react'

const Button = (props) => {
  return (
    <button className={`button ${props.variant}`}>{props.children}</button>
  );
};

export default Button;
