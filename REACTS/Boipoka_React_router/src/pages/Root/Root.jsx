import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet> {/* only this changes and all the other component containing data will remain constant. <Outlet>
            tag is for the changing */}
            <Footer></Footer>
        </div>
    );
};

export default Root;