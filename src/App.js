import React from 'react';
import './App.css'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import Register from './pages/register';
import { useState, useEffect } from 'react';


const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
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