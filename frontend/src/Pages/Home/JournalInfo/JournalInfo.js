import React from 'react';
import './JournalInfo.css';
import img6 from '../../../images/img-6.jpg';

const JournalInfo = () => {
    return (
        <section className='bg-[#FAF8FF] grid grid-cols-1 lg:grid-cols-5 py-7'>
            
            <div className='col-span-2'>
                <img className='w-[70%] lg:w-[80%] mx-[auto] shadow-lg border rounded-md' src={img6} alt="img-6" />
            </div>


            <div className='w-[80%] mx-auto mt-5 lg:col-span-3'>
                <h1 className='text-2xl font-semibold'>Journal of Advanced Biotechnology and Experimental Therapeutics</h1>
                <div className='issn'>
                    eISSN 2616-4760
                </div>
                <p className="text-lg">
                    Journal of Advanced Biotechnology and Experimental Therapeutics (JABET) – is an open-access, international, peer-reviewed, scientific journal publishing original research findings and reviews on all aspects of biotechnology and experimental therapeutics. It provides a platform for Scientists and Academicians all over the world to promote, share, and discuss various new issues and developments in translational research and recent discoveries in the Biotechnology and Biomedical Sciences.
                </p>
            </div>
        </section>
    );
};

export default JournalInfo;