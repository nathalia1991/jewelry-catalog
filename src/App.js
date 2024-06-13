import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import J1 from './components/J1';
import J2 from './components/J2';
import J3 from './components/J3';
import J4 from './components/J4';
import Counter from './components/Counter';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
    <div className='container'>
      <h1 id='title' className='text-center my-3'>CATALOGO</h1>
    </div>
    <Routes>
      <Route path='/j1' element={<J1 className="image-size"/>}/>
      <Route path='/j2' element={<J2 className="image-size"/>}/>
      <Route path='/j3' element={<J3 className="image-size"/>}/>
      <Route path='/j4' element={<J4 className="image-size"/>}/>
    </Routes>
      <Navigation/>
      <hr/>
      <div>
      <Counter/>
      </div>
    </Router>  
  );
}

export default App;