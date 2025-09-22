import React from 'react'
import ProductsList from './components/ProductsList';
import Login from './components/Login'
import Counter from "./components/Counter"
import {BrowserRouter,  Routes, Route } from "react-router-dom";
import Motion from './components/Motion';

export default function App() {



  return (

    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path="/products" element={<ProductsList />} />
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/motion' element={<Motion/>}/>


    </Routes>
    </BrowserRouter>


  )
}