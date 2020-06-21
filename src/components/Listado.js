import React from 'react';
import Gasto from './Gasto'
import PropTypes from 'prop-types'


const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <li> Listado </li>
    {gastos.map(gasto => (
      <Gasto
        key={gasto.id}
        gasto={gasto}
      />
    ))}
  </div>

)

Listado.protoType = {
  gastos: PropTypes.array.isRequired
}
export default Listado;