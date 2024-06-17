import React from 'react'
import { Link } from 'react-router-dom';
import PRODUCTS_DATA from '../service/data';
import ProductComponent from './ProductComponent';

const Navigation = () => {
  return (
    <div className="container md-1 father">
      {
        // Iterar la lista de productos y renderizar las componentes (menu)
        PRODUCTS_DATA.map(product => {
          return (<Link to={product.path} className="links" key={product.name}>
            <figure>
                <ProductComponent className="nav-item" product={product}/>
                <figcaption>{product.name}</figcaption>
            </figure>
          </Link>)
        })
      }
     </div>
  )
}

export default Navigation