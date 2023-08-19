import React from 'react';
import { Link } from 'react-router-dom';

const Announcement = () => {
    return (
        <div className='article'>
            <h3 className="text-3xl underline underline-offset-8 font-semibold text-center py-5">News and Announcements</h3>
            <div className='article-area'>
                <div className='leftside shadow-lg bg-white my-4'>
                    <div>
                        <div className="my-1">
                            <span className="border-solid border-[1px] rounded border-black p-1 text-xs">Original article</span>
                        </div>

                        <div>
                            <a href="">
                                <h3 className='artTitle text-xl font-semibold hover:underline hover:text-[#7FB2C8]'>JABET | 2023, Vol6 Issue2 has been published.</h3>
                            </a>
                        </div>

                        <div className="text-sm text-[#313742] my-1">
                            <span>2023, Vol6 Issue2
                                https://www.bsmiab.org/jabet/articles/issues/2023-vol6-issue2</span>
                        </div>

                        <div className="artInfo">
                            <span> { } </span>
                        </div>

                        <div className="artAccess">
                            <span>

                            </span>
                            <span>

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcement;