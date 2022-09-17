import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

// con la sintaxis de desestructuración pasamos la propiedad del props directamente
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;