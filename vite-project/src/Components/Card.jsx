/* eslint-disable react/prop-types */
import React from 'react'; // eslint-disable-line no-unused-vars
import './Card';
const Card = ({ name , color }) => {

    const cardStyle = {
        width: '200px',
        height: '50px',
        backgroundColor: color,
      };

    return (
        <>
            <div className='card'>
                <p>Hola {name} !</p>
                <p>Sabemos que tu color favorito es:</p>
                <div style={cardStyle}>
                    <p>{color}</p>
                </div>
            </div>
        </>
    ) 
}

export default Card;