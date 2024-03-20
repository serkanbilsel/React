import React from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <Avatar src="me.jpg" size="medium" />
      <br />
      <Button variant="succes">Başarılı</Button>
    </div>
  );
}

export default App;
