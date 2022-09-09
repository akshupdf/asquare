//import logo from './logo.svg';
import './App.css';
import Nav from './nav.js'
import Footer from './footer.js'
import SimpleSlider from './slider.js'
import Signup from './signup.js'
import Contact from './contact.js'
import About from './about.js'
import Product from './product.js'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
    <div>
      
      <BrowserRouter >
      <Nav />
      <Routes>
      
        <Route exact path='/' element={< Product />}></Route>
        <Route path='product' element={<SimpleSlider />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
       </Routes> 
      
      </BrowserRouter>      
    </div>
    
    <Footer />
    </div>
  );
}

export default App;
