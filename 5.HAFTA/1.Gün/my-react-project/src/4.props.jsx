


const MyComponent = (props) => {
  return (
   <h1>Hello {props.value}</h1>>
  );

  const App = () =>{
    return (
      <div>
        <MyComponent value="Zafer"/>
        <input value="zafer" />
        </div>
    );
  };
};

export default App