import React from 'react';
import './home.css'
import Content from '../components/content';
import Footer from '../components/footer.js';
import SideMenu from '../components/sideMenu';
import { BrowserRouter } from 'react-router-dom';
import Custommers from './customers.jsx';
import Devices from './devices.jsx';
import Firmware from './firmwares.jsx';
import Error from './error.jsx';
import Dashboard from './dashboard';
import { Route, Routes} from 'react-router-dom';

const Home = () => {
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

export default Home; 