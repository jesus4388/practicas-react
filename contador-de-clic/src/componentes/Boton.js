import React from 'react';
import '../hojas-estilos/boton.css';

function Boton({ texto, BotonClick, manejarClic }) {
 return (
    <button className={BotonClick ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
        {texto}
    </button>
 );  
}

export default Boton;