import React from 'react';
import './home.css'
import Content from '../components/content';
import Footer from '../components/footer.js';
import SideMenu from '../components/sideMenu';
import { BrowserRouter } from 'react-router-dom';
import Custommers from './customers';
import Devices from './devices';
import Firmware from './firmwares';
import Error from './error';
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