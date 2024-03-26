import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import About from "./About";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App" style={{width:'100%'}}>
    <Header/>


    <BrowserRouter>
     <Routes>
     <Route path="/" element={<About />}></Route>
     </Routes>
 
   </BrowserRouter>
    </div>
    
  );
}

export default App;
