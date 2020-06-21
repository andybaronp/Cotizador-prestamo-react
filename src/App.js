import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto'



function App() {
  // definr el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, guardarcrearGasto] = useState(false)


  // useEffect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      // agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto])
      // resta del presupuesto actual

      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)

      // resetear a false
      guardarcrearGasto(false)
    }

  }, [gasto, crearGasto, gastos, restante])




  return (

    <div className="container">
      <header>
        <h1>Presupuesto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            ></Pregunta>
          ) :
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarcrearGasto={guardarcrearGasto}

                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}

                />
              </div>
            </div>
          }


        </div>

      </header>
    </div>
  );
}

export default App;
