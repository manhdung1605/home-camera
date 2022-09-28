
import React from 'react';
import './App.css'
import Content from './components/content';
import Footer from '././components/footer.js';
import SideMenu from './components/sideMenu';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

const App = () => {
  // return  (
  //   <Routes>
  //     <Route path="/login" element={<Login/>}/>
  //     <Route path="/" element={<Home/>}/>
  //   </Routes>
  // )
  return (
    <div className='content'>
      <div className='content-child'>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;