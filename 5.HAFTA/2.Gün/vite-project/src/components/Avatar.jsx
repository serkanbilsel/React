import React from 'react'
import './App.css'

const Avatar = (props) => {
 return <img src={props.src} className={"avatar" + " " + props.size} />
}

const App = () => {
  return (
    <div>
   <Avatar src="me.jpg" size="small" />
   <Avatar src="me.jpg" size="large" />
   <Avatar src="me.jpg" size="medium" />
    </div>
  )
}

export default App