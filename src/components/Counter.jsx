import React from 'react'
import { useState } from 'react'

export const Counter = () => {

  const [ counter, setCounter ] = useState(0);

  return (
    <div>
        <h3>Llevas un {counter} unidades seleccionadas</h3>
        <button type="submit" className='button-large' onClick={() => setCounter(counter +1)}>Sumar Contador</button>
    </div>
  )
}