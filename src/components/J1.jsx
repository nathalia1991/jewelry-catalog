import React from 'react'
//crear componente, e importando la imagen
import j1_ from '../images/j1.png'

//crear variable
const J1 = ({ className }) => {
  return (//mostrar componente como imagen agrupado dentro de un div
    <div className={`image-container ${className}`}>
      <img src={j1_} alt="anillo 1" className='image'/>
    </div>
  )
}

export default J1