import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1440px] mx-auto h-screen bg-gray-200 px-5'>
            Its the main layout of the website
            <Outlet/>
        </div>
    );
};

export default Root;