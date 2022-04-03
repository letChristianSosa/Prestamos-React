import React from 'react';

export default function Resultado({cantidad, plazo, total}) {
     return (
          <div className='u-full-width resultado'>
               <h2>Resumen: </h2>
               <p>La cantidad solicitada es: ${cantidad}</p>
               <p>Plazo: {plazo} meses</p>
               <p>Su pago mensual es de: ${(total/plazo).toFixed(2)}</p>
               <p>Total: ${total}</p>
          </div>
     )
}