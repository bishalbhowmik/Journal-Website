import React from 'react';
import InformationNav from '../../Shared/InformationNav/InformationNav';
import { Outlet } from 'react-router-dom';

const InformationLayout = () => {
    return (
        <div>
            <InformationNav></InformationNav>
            <Outlet></Outlet>
        </div>
    );
};

export default InformationLayout;