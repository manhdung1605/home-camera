import React from 'react';
import './App.css'
import Content from './components/content';
import Footer from '././components/footer.js';
import SideMenu from './components/sideMenu';
import Custommers from './pages/customers';
import Devices from './pages/devices';
import Firmware from './pages/firmwares';
import Error from './pages/error';
import Dashboard from './pages/dashboard';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path='/' element={<Custommers />}></Route>
      <Route path='/devices' element={<Devices />}></Route>
      <Route path='/firmware' element={<Firmware />}></Route>
      <Route path='/error' element={<Error />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  )
  return (
    <>
      <div className='content'>
        <div className='content-child'>
          <SideMenu />
          <Content />
        </div>
        <Footer />
      </div>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
    </>
  );
};

export default App;