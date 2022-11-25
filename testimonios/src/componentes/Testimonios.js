import React from 'react';
import '../stylesheet/Testimonios.css'

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
      src={require(`../imagenes/${props.imagen}`)}
      alt={props.imagen} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en <strong>{props.planeta}</strong></p>
        <p className='nivel-guerrero'>{props.nivel}</p>
        <p className='texto-testimonio'>{props.texto}</p>
      </div>
    </div>
  );
}

export default Testimonio;