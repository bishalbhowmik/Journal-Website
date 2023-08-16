import React from 'react';
import './JournalInfo.css';

const JournalInfo = () => {
    return (
        <section className='bg-slate-300 grid grid-cols-5'>
            <div className='stat-col col-span-2 shadow-lg border rounded-md p-5'>
                <div className='topContents'>
                    <div className='title'>
                        <span className='flex justify-center items-center bg-slate-400 py-1 border rounded-sm'>
                            <p className='mr-3'><i class="fa-solid fa-signal"></i></p>
                            <h3 className='text-md'>Journal Metrics</h3>
                        </span>
                    </div>
                    <div className=''>
                        <span className='flex justify-between'>
                            <p>Acceptance rate</p>
                            <p>22%</p>
                        </span>
                        <span className='flex justify-between'>
                            <p>Submission to final decision</p>
                            <p>22%</p>
                        </span>
                        <span className='flex justify-between'>
                            <p>Acceptance to publicaiton</p>
                            <p>22%</p>
                        </span>
                        <span className='flex justify-between'>
                            <p>Scopus CiteScore</p>
                            <p>22%</p>
                        </span>
                        <span className='flex justify-between bg-[#FBEAFF] p-1'>
                            <p >APC</p>
                            <p >300$</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <h1>Journal of Advanced Biotechnology and Experimental Therapeutics</h1>
                <div className='issn'>
                    eISSN 2616-4760
                </div>
                <p>
                    Journal of Advanced Biotechnology and Experimental Therapeutics (JABET) – is an open-access, international, peer-reviewed, scientific journal publishing original research findings and reviews on all aspects of biotechnology and experimental therapeutics. It provides a platform for Scientists and Academicians all over the world to promote, share, and discuss various new issues and developments in translational research and recent discoveries in the Biotechnology and Biomedical Sciences.
                </p>
            </div>
        </section>
    );
};

export default JournalInfo;