import React from 'react';
import { useLoaderData } from 'react-router-dom';
import book from '../../../../images/book.png';
import '../ArticleDetails/ArticleDetails.css';

const ArticleDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { id, title, author, publishInfo, description } = data;

    return (
        <div className='grid md:grid-cols-7 gap-y-5 gap-x-5 max-w-[100%] mx-auto p-6 mt-5'>

            <div className='md:col-span-5 bg-white rounded-lg p-5'>






                <div className='max-w-[95%] mx-auto'>
                    <div className="topmeta">
                        <span>Original article</span>| <span>Open access</span> |
                        <span> J Adv Biotechnol Exp Ther. 2023; 6(3): 659-672</span>|
                        <a className="hover:underline" href="" target="_blank">doi: 10.5455/jabet.2023.d157</a>
                    </div>
                    <span className=''>
                        <h2 className='text-3xl font-semibold max-w-[80%] my-3'>{title}
                        </h2>

                        <p className='text-sm mb-2'>Tuli Samayeta Sarkar, Shehreen Saadlee, Khan Abira, Akhteruzzaman Sharif, Sajib Abu Ashfaqur </p>
                    </span>

                    <div className='bg-[#DDE2E6] max-w-[100%] rounded-lg p-5'>
                        <h2 className='text-2xl font-semibold mb-4'>Abstract</h2>
                        <p className='text-lg'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* ********************* */}

            <div className='md:col-span-2 max-w-[80%] md:max-w-[90%] mx-auto'>
                <div className="card bg-base-100 shadow-sm mb-5">
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
                <div className="card bg-base-100 shadow-sm mb-5">
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
                <div className="card bg-base-100 shadow-sm mb-5">
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

export default ArticleDetails;