import React from 'react';
import EditorialNav from '../../Shared/EditorialNav/EditorialNav';
import { Outlet } from 'react-router-dom';

const EditorialLayout = () => {
    return (
        <div className='grid grid-cols-6'>
            <div className='col-span-2'>
                <EditorialNav></EditorialNav>
            </div>

            <div className='col-span-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default EditorialLayout;