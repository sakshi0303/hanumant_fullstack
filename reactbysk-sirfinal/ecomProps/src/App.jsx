// props: child to child transfer data element form home to cart
// so we have to create a function in app.js and execute it in home.jhsx
// npm react-ToastContainer, react-magnifier 
// npm react-toastify to make alert box visually good
// context API

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
import View from './Pages/View';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//child(Contact) to parent(App.js) Props
function App() {
  const [cartdata, setcartdata] = useState([]);
  function xyz(ans){
    // #get specific element data from home
    console.log("ans==",ans);
    
    let idexist=cartdata.find((ele)=>ele.id===ans.id)
    
    if (idexist){
      //return alert("item already in cart")
      return toast("item already in cart!",{theme: "light",position: "top-center"});
  
    }
    
    
    setcartdata([...cartdata,ans])
    toast("item succesfully  added in cart!",{theme: "dark",position: "top-center"});
    console.log(cartdata);
  }
  
  return (
    <div className="App">
     <BrowserRouter>
     <div style={{marginBottom:"60px"}}><NavBar cartdata={cartdata} /></div>
     
     {/* <NavBar cartdata={cartdata} style={{marginBottom:"60px"}} /> */}
     <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Home  xyz={xyz}/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart cartdata={cartdata} setcartdata={setcartdata}/>}/>
      <Route path='/view' element={<View />}/>

      <Route path='/*' element={<PNF/>}/>
     </Routes>
     <ToastContainer />
     
     </BrowserRouter>
    </div>
  );
}

export default App;
