import React from 'react';
import AboutNav from '../../Shared/AboutNav/AboutNav';
import { Outlet } from 'react-router-dom';

const AboutLayout = () => {
    return (
        <div>
            <AboutNav></AboutNav>
            <Outlet></Outlet>
        </div>
    );
};

export default AboutLayout;