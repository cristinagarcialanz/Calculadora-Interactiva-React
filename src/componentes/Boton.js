import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {
  
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
  // el método .trimEnd() se puede implementar luego de cerrar la plantilla literal para eliminar el espacio que queda al final del resultado de la plantilla
  
  return (
  <button 
  className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
  onClick={() => props.manejarClic(props.children)}>     
    {props.children}
  </button>
  );
}

export default Boton;