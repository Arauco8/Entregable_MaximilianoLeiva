/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import Card from "./Card";

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length < 3 || name.trim().startsWith(' ') || color.trim().length < 6) {
            setError(true);
            setSubmitted(false);
        } else {
            setError(false);
            setSubmitted(true);
        }
    }

return (
    <div>
        <form onSubmit={handleSubmit} className='form-react'>
            <div className='form-control'>
                <input type="text" value={name} onChange={handleNameChange} placeholder='Ingresa tu nombre'/>
            </div>
            <div className='form-control'>
                <input type="text" value={color} onChange={handleColorChange} placeholder='Ingresa tu color favorito (formato HEX)'/>
            </div>
            <button type="submit">ENVIAR</button>
        </form>
        {error && <p className='error'>Por favor chequea que la información sea correcta</p>}
        {submitted && !error && <Card name={name} color={color} />}
    </div>
    )
}
/* {name && color && <Card name={name} color={color} />} */
export default Form