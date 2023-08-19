import React from 'react';
import { Link } from 'react-router-dom';

const InformationNav = () => {
    return (

        <div className=" bg-base-300 flex items-center justify-center h-[30px] ">
            <Link className="btn btn-ghost btn-xs normal-case text-sm " to='/info'>Authors</Link>
            <Link className="btn btn-ghost btn-xs normal-case text-sm" to='/info/reviewers'>Reviewers</Link>
            <Link className="btn btn-ghost btn-xs normal-case text-sm" to='/info/editors'>Editors</Link>
        </div>

    );
};

export default InformationNav;