import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Pnf from "./Component/Pnf";
import Counter from "./Component/Counter";
// BrowserRouter --> it will tell the browser theat we will use routing in out application
// routes: container that has router
// download npm i react-router-dom

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Pnf />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
