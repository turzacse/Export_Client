import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1440px] mx-auto pb-96 bg-gray-200 px-5 pt-10'>
            <Outlet/>
        </div>
    );
};

export default Root;