import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header></Header>

            <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;