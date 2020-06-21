import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid'
import PropTypes from 'prop-types'


const Formulario = ({ guardarGasto, guardarcrearGasto }) => {

  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)

  const agregarGasto = e => {
    e.preventDefault()
    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true)
      return;
    }
    guardarError(false)
    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    // pasar al otro componet
    guardarGasto(gasto)
    guardarcrearGasto(true)
    // reinicia el form
    guardarNombre('')
    guardarCantidad(0)
  }


  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos</h2>
      {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}
      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Comida"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value))}
        />

      </div>
      <input type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto" />

    </form>

  );
}
Formulario.protoType = {
  guardarGasto: PropTypes.func.isRequired,
  guardarcrearGasto: PropTypes.func.isRequired
}
export default Formulario;