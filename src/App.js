import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

function App () {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route path='/details' element={<Details/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
