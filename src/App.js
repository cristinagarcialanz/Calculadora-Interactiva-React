import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
// Con el hooc { useState } podemos asignarle un estado a nuestro componente principal de la aplicación
import { evaluate } from 'mathjs';
// mathjs es una librería ó biblioteca para funciones matemáticas para javascript y node.js

// input es el valor ingresado por el usuario, setInput es la función que actualiza el input
function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };
// colocamos un condicional en caso de que el usuario ingrese primero el =
  const calcularResultado = () => {
    if (input) {
    setInput(evaluate(input));
  } else {alert('Ingrese un valor valido')}
};

  return (
    <div className='App'>
      <div className='logotipo-contenedor'>
        <h1>Calculadora Interactiva</h1>
      </div>
      <div className='contenedor-calculadora' >
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>  
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>          
        </div>
      </div>
    </div>
  );
}

export default App;
