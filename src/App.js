import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

function App() {

  // Definir el state
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState('');
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);

  return (
    <>
      <Header titulo="Cotizador de Prestamos"/>

      <div className='container'>
              <Formulario
                cantidad={cantidad}
                setCantidad={setCantidad}
                plazo={plazo}
                setPlazo={setPlazo}
                // total={total}
                setTotal={setTotal}
                setCargando={setCargando}
              />
              <div className='mensajes'>
                {cargando ? <Spinner/> : total === 0 ? <Mensaje /> : <Resultado cantidad={cantidad} plazo={plazo} total={total}/>}
              </div>
      </div>
    </>
  );
}

export default App;
