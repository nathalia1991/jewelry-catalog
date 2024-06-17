import React from 'react'
import ItemAction from './ItemAction'


const ProductComponent  = (props) => {
  return (//mostrar componente como imagen agrupado dentro de un div
    <div className={`image-container ${props?.className}`}>
      <div className="selectable-item">
        <img src={props?.product?.image} alt={props?.product?.name} className='image'/>
        {
          // Enviado desde el app.js (para mostrar los botones de agregar al carrito)
          // Render condicional, si actions esta presente muestra los botones
          props?.shouldDisplayActions ?  <ItemAction product={props.product}/> : ''
        }
      </div>
    </div>
  )
}

export default ProductComponent