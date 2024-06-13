import React from 'react'
import { Link } from 'react-router-dom';
import J1 from './J1';
import J2 from './J2';
import J3 from './J3';
import J4 from './J4'; 

const Navigation = () => {
  return (
    <div className="container md-2 father">
        <Link to="/j1" className="links">
            <figure>
                <J1 />
                <figcaption>ANILLO 1</figcaption>
            </figure>
        </Link>
        <Link to="/j2" className="links">
            <figure>
              <J2 />
              <figcaption>ANILLO 2</figcaption>
            </figure>
        </Link>
        <Link to="/j3" className="links">
            <figure>
                <J3 />
                <figcaption>ANILLO 3</figcaption>
            </figure>
        </Link>
        <Link to="/j4" className="links">
            <figure>
              <J4 />
              <figcaption>ANILLO 4</figcaption>
            </figure>
        </Link>
     </div>
  )
}

export default Navigation