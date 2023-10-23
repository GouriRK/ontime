import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signup/signin' element={<Signin/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;
