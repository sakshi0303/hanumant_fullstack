import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import PNf from './pages/PNf';
import SignUp from './pages/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MouseTracker from './pages/MouseTracker';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/MouseTracker' element={<MouseTracker/>}/>
        <Route path='/*' element={<PNf/>}/>
      </Routes>
      <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
