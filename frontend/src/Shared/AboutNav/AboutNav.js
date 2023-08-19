import React from 'react';
import { Link } from 'react-router-dom';

const AboutNav = () => {
    return (
        <div>
            <div className=" bg-base-300 flex items-center justify-center h-[30px] ">
                <Link className="btn btn-ghost btn-xs normal-case text-sm " to='/about'>About Journal</Link>
                <Link className="btn btn-ghost btn-xs normal-case text-sm" to='/about/editorial'>Editorial Board</Link>
                <Link className="btn btn-ghost btn-xs normal-case text-sm" to='/about/indexing'>Indexing</Link>
                <Link className="btn btn-ghost btn-xs normal-case text-sm" to='/about/fees'>Fees</Link>
                <Link className="btn btn-ghost btn-xs normal-case text-sm" to='/about/contact'>Contact</Link>
            </div>
        </div>
    );
};

export default AboutNav;