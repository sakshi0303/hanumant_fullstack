
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NavBar from './Components/NavBar';
import { useState } from 'react';
import Product from './Pages/Product';
import PNF from './Pages/PNF';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
//child(Contact) to parent(App.js) Props
function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/*' element={<PNF/>}/>
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
