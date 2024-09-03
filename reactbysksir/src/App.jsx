import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Pnf from './Components/Pnf';
import Counter from './Components/Counter';
// BrowserRouter --> it will tell the browser theat we will use routing in out application
// routes: container that has router
// download npm i react-router-dom
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Pnf/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
