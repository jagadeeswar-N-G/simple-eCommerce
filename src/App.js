import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router';
import LogIn from './components/LogIn';
import Registation from './components/Registation';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductDescription from './components/ProductDescription';
import Products from './components/Products';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/registration' element={<Registation/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/home/:user' element={<ProductDescription/>}/>
      </Routes>
    </div>

  )
  }
export default App;
