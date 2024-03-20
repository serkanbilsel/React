import React from 'react'
import MyButton from './components/MyButton'

const App = () => {
  const handleClick = () => {
    alert("Hello");
  }
  return (
    <>
      <MyButton onClick={handleClick}
        onMouseOver={() => {
          alert("Mouse Üzerinde");
        }}


      >Tıkla</MyButton >
    </>
  )
}

export default App