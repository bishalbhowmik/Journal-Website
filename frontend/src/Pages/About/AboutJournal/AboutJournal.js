import React from 'react';
import './AboutJournal.css';
import book from '../../../images/book.png';

const AboutJournal = () => {
    return (
        <div className='grid grid-cols-6 max-w-[90%] mx-auto'>

            <div className="col-span-4">
                <div>
                    <h1 className='text-3xl underline underline-offset-4 decoration-red-950 my-4' >
                        About Jabet
                    </h1>
                    <p className='text-[18px] mb-10'>
                        Journal of Advanced Biotechnology and Experimental Therapeutics (JABET) – is an open-access, international, peer-reviewed, scientific journal publishing original research findings and reviews on all aspects of biotechnology and experimental therapeutics. It provides a platform for Scientists and Academicians all over the world to promote, share, and discuss various new issues and developments in translational research and recent discoveries in the Biotechnology and Biomedical Sciences.
                    </p>
                    <p className='text-[16px] mb-1'><strong>Short name: </strong> J Adv Biotechnol Exp Ther</p>
                    <p className='text-[16px] mb-1'><strong>Electronic ISSN: </strong> 2616-4760</p>
                    <p className='text-[16px] mb-1'><strong>Year of starting: </strong> September 2017, first issue- January 2018</p>
                    <p className='text-[16px] my-2'><strong>Frequency of publication: </strong> 3 times a year (January, May, and September) in the English language. We also offer special issues on emerging topics. Notably, accepted papers will be published continuously in the journal (as soon as accepted).</p>
                    <p className='text-[16px] mb-1'><strong>License type:</strong> Free for non-commercial use (CC-BY-NC 4.0), [OPEN ACCESS]</p>
                    <p className='text-[16px] mb-1'><strong> DOI:</strong>Available for each article</p>
                    <p className='text-[16px] mb-1'><strong> Country: </strong>Bangladesh</p>
                    <p className='text-[16px] mb-1'><strong> Publisher: </strong><a href="">http://www.bsmiab.org/</a></p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mt-10 mb-5'>Scope of the publication </h2>
                    <p className='text-[18px] mb-10'>JABET is devoted to publishing the latest developments in translational research and the recent discoveries in the field of Biotechnology and Biomedical Sciences. Submission is encouraged of papers that involve genetic, molecular, and cellular studies of human, animal, environmental, and medicinal plant subjects. Papers should provide rigorous quantitative analyses and/or new insights into biochemical mechanisms.</p>
                    <p className='text-[18px] mb-3'>Topics of particular interest within the journal’s scope include, but are not limited to, those listed below:</p>
                    <ul className='list-disc text-[18px] ml-10'>

                        <li>Cellular and Molecular Biology</li>
                        <li>Cellular and Molecular Biology</li>
                        <li>Cellular and Molecular Biology</li>
                        <li>Cellular and Molecular Biology</li>
                        <li>Cellular and Molecular Biology</li>
                        <li>Cellular and Molecular Biology</li>
                        <li>Cellular and Molecular Biology</li>
                        <li>Cellular and Molecular Biology</li>
                        <li>Cellular and Molecular Biology</li>
                        <li>Cellular and Molecular Biology</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold mt-10 mb-5'>The vision of the journal</h2>
                    <p className='text-[18px] mb-3'>The vision of our journal is to</p>
                    <ul className='list-disc text-[18px] ml-10 vision'>

                        <li>Upgrade the awareness among experts and young scientists about modern breakthroughs and emerging opportunities in biotechnology and Biomedical research.</li>
                        <li>Establish rapid peer review processes to accelerate the publication of excellent research papers of their interest.</li>
                        <li>Upgrade the awareness among experts and young scientists about modern breakthroughs and emerging opportunities in biotechnology and Biomedical research.</li>
                        <li>Establish rapid peer review processes to accelerate the publication of excellent research papers of their interest.</li>

                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold mt-10 mb-5'>Editorial Office</h2>
                    <p className='text-[18px] mb-3 w-[50%]'>Journal of Advanced Biotechnology and Experimental Therapeutics
                        a 4-7, Nogosan-dong, Mapogu
                        Seoul, South Korea.
                        b 77 Azampur, [Imam Bukhari (RA) Lane], Muktijoddha Saroni Road,
                        Dakshinkhan, Uttara, Dhaka-1230, Bangladesh.
                        Email: jabet.editor@bsmiab.org or jabet.editor@gmail.com</p>
                </div>

            </div>
            <div className='col-span-2 mx-auto mt-4'>



                <div className="card w-96 bg-base-100 shadow-sm mb-5">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Current Issue</h2>

                    </div>

                    <figure className="px-10">
                        <img src={book} alt="book" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vol6- Issue 2</h2>
                       
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm mb-5">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Current Issue</h2>

                    </div>

                    <figure className="px-10">
                        <img src={book} alt="book" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vol6- Issue 2</h2>
                       
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm mb-5">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Current Issue</h2>

                    </div>

                    <figure className="px-10">
                        <img src={book} alt="book" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vol6- Issue 2</h2>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutJournal;