import React from 'react'
//crear componente, e importando la imagen
import j2_ from '../images/j2.jpg'

//crear variable
const J2 = ({ className }) => {
  return (//mostrar componente como imagen agrupado dentro de un div
    <div className={`image-container ${className}`}>
      <img src={j2_} alt="anillo 2" className='image'/>
    </div>
  )
}

export default J2