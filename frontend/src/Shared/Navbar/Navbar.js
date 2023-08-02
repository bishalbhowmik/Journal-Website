import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider';

import './Navbar.css';

const Navbar = () => {

    // const { user, logOut } = useContext(AuthContext);
    const item = document.getElementById('toogle');
    const side = document.getElementById('sidebar');

    const bgChange = () => {

        item.classList.toggle('active');
        side.classList.toggle('active');
    }

    const buttonRemove = (e) => {
        if (e.target.id !== 'toogle' && e.target.id !== 'sidebar') {
            item.classList.remove('active')
            side.classList.remove('active')
        }

    }


    // const logOutUser = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch()
    // }

    



    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Articles</Link></li>
        <li><Link to='/'>Special Issues</Link></li>
        <li><Link to='/'>Editorial Board</Link></li>
        <li><Link to='/'>Announcements </Link></li>
        <li><Link to='/'>Information </Link></li>
        <li><Link to='/'>About </Link></li>


        {/* {
            user?.uid ? <>

                <li><Link onClick={logOutUser}> Sign Out </Link></li>
                <li><p className="text-sm text-blue-500 bg-gray-300">{user.displayName}</p></li>
            </> : <>
                <li><Link to='/signup'>Sign Up </Link></li>
                <li><Link to='/login'> Login </Link></li>
            </>
        } */}
    </>

   
    return (

        <div className="bg-base-100 opacity-[2]">
            <div className="md:hidden nav-md">
                <div className=''>
                    <div id="toogle" onClick={bgChange} className='bishal' ></div>

                    <div id="sidebar">
                        <ul onClick={buttonRemove}>
                            {menuItem}
                        </ul>
                    </div>
                </div>
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Journal Website</Link>
                </div>
            </div>

            {/* Large and medium */}

            <div className="nav-lg">
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Journal Website</Link>
                </div>
                <div>
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>



    );
};

export default Navbar;