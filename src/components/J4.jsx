import React from 'react'
//crear componente, e importando la imagen
import j4_ from '../images/j4.jpg'

//crear variable
const J4 = ({ className }) => {
  return (//mostrar componente como imagen agrupado dentro de un div
    <div className={`image-container ${className}`}>
      <img src={j4_} alt="anillo 4" className='image'/>
    </div>
  )
}

export default J4