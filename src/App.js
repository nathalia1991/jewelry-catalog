import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PRODUCTS_DATA from './service/data';
import ProductComponent from './components/ProductComponent';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 id='title' className='text-center my-3'>CATALOGO</h1>
      </div>
    <Routes>
      {
        PRODUCTS_DATA.map(product => {
          return <Route path={`${product.path}`} 
                    element={
                      <ProductComponent 
                        className="image-size" 
                        shouldDisplayActions="wdfgh" 
                        product={product}/>
                    }/>
        })
      }
    </Routes>
      <Navigation/>
        <hr/>
        <div>
        </div>
    </Router>  
  );
}

export default App;