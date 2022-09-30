import React from 'react';
import './App.css'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="*" element={<Home />}>
        </Route>      
      </Routes>
    </BrowserRouter>
  )
};

export default App;