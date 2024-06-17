import React from 'react'
import { useState } from 'react'

const ItemAction = (props) => {
  const [ counter, setCounter ] = useState(0);

  function addToCart() {
    console.log("Agregando al carrito", counter);
    // Llamar al redux

    //
    setCounter(0)
  }

  function removeElement() {
    if (counter == 0) {
      return;
    }
    setCounter(counter -1);
  }

  return (
    <div className='item-actions'>
        <p>{counter}</p>
        <button 
          className='item-action add' 
          onClick={() => setCounter(counter + 1)}>+</button>

          <button
            className='item-action remove' 
            onClick={() => removeElement()}>-</button>

          <button 
            className='item-action add-to-cart' 
            onClick={() => addToCart()}>&#10004;</button>
    </div>
  )


}

export default ItemAction