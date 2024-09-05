import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Pnf from './Pages/Pnf';
import Counter from './Pages/Counter';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import NavBar from './Components/NavBar';
import ExpenseTracker from './Pages/ExpenseTracker';

// BrowserRouter --> it will tell the browser theat we will use routing in out application
// routes: container that has router
// download npm i react-router-dom
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Pnf/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/expensetracker' element={<ExpenseTracker/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
