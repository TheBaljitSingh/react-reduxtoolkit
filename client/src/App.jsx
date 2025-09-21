import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice';
import ProductsList from './components/ProductsList';
import Login from './components/Login'
import Counter from "./components/Counter"
import {BrowserRouter,  Routes, Route } from "react-router-dom";

export default function App() {



  return (

    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path="/products" element={<ProductsList />} />
      <Route path='/counter' element={<Counter/>}/>

    </Routes>
    </BrowserRouter>


  )
}
