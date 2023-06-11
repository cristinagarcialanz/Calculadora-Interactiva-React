import React from 'react';
import '../hojas-de-estilo/BotonClear.css'

// Usaremos {props.children} en éste caso para practicar, pero el valor Clear no va a cambiar como el valor de los botones
const BotonClear = (props) => (
    <div 
      className='boton-clear'
      onClick={props.manejarClear}>
      {props.children}
    </div>
);

export default BotonClear;