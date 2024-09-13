
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NavBar from './Components/NavBar';
import { useState } from 'react';
//child(Contact) to parent(App.js) Props
function App() {
  const [data, setdata] = useState('');
  function xyz(ans){
    console.log(ans);
    setdata(ans)

  }
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Home data={data}/>}/>
      <Route path='/contact' element={<Contact data={xyz}/>}/>
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
