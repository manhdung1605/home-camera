import React from 'react';
import './home.css'
import Content from '../components/content';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';

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