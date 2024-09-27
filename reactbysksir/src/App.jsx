
import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from './Pages/Home';
import About from './Pages/About';
import Pnf from './Pages/Pnf';
import Counter from './Pages/Counter';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import NavBar from './Components/NavBar';
import ExpenseTracker from './Pages/ExpenseTracker';
import SwapImg from './Pages/SwapImg';
import EffectsHooks from './Pages/EffectsHooks';
import Receipe from './Pages/Receipe';
import ViewReceipe from './Pages/ViewReceipe';
import OnchangeForm from './Pages/OnchangeForm';
import ReducerPractice from './Pages/ReducerPractice';
import ReduxToolKitPractice from './Pages/ReduxToolKitPractice';
// BrowserRouter --> it will tell the browser theat we will use routing in out application
// routes: container that has router
// download npm i react-router-dom
// props are used to send data from parent component to child component
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
      <Route path="/" element={<Receipe/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Pnf/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/expensetracker' element={<ExpenseTracker/>}/>
        <Route path='/swapimage' element={<SwapImg/>}/>
        <Route path='/useeffect' element={<EffectsHooks/>}/>
        <Route path='/view' element={<ViewReceipe/>}/>
        <Route path='/onchangeformwithradiobutton' element={<OnchangeForm/>}/>
        <Route path='/reducer' element={<ReducerPractice/>}/>
        <Route path='/redux' element={<ReduxToolKitPractice/>}/>

      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
