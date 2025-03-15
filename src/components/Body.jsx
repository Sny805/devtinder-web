import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
const Body = () => {
    return (
        <div data-theme="dark" className="h-screen bg-base-100">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body
