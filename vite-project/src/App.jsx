/* eslint-disable no-unused-vars */
import Form from "./Components/Form"
import { useState } from "react";
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (name, color) => {
    setName(name);
    setColor(color);
  };
  
  return (
    <>
      <div className="App">
        <h1>Ingrese un Color </h1>
        <Form onSubmit={handleSubmit} />
      </div>
    </>
  )
}

export default App
