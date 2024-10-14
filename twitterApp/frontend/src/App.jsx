
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pnf from './pages/Pnf';

import { useSelector} from 'react-redux'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let ctx=useSelector((state)=>state.user)
  console.log("inside aapp ctx",ctx);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
