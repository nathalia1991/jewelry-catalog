import React from 'react'
//crear componente, e importando la imagen
import j3_ from '../images/j3.png'

//crear variable
const J3 = ({ className }) => {
  return (//mostrar componente como imagen agrupado dentro de un div
    <div className={`image-container ${className}`}>
      <img src={j3_} alt="anillo 3" className='image'/>
    </div>
  )
}

export default J3