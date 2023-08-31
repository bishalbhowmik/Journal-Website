import React from 'react';
import { useLoaderData } from 'react-router-dom';
import book from '../../../../images/book.png';

const ArticleDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { id, title, author, publishInfo, description } = data;

    return (
        <div>
            <div>
                <span className='flex items-start text-[20px] mb-1 mt-5'>
                    <p className='mr-1'>Original article  |</p>
                    <p className='mr-1'>  Open access  |</p>
                    <p className='mr-1'>J Adv Biotechnol Exp Ther. 2023; 6(3): 659-672  |</p>
                    <p className='mr-1 hover:text-blue-400 hover:underline'> <a href="">doi: 10.5455/jabet.2023.d157</a></p>
                </span>

            </div>

            <div>
                <span className=''>
                    <h2 className='text-3xl font-semibold'>{title}
                    </h2>

                    <p>Tuli Samayeta Sarkar, Shehreen Saadlee, Khan Abira, Akhteruzzaman Sharif, Sajib Abu Ashfaqur </p>
                </span>

                <div className='bg-[#DDE2E6] max-w-[80%] mx-auto rounded-lg p-5'>
                    <h2 className='text-2xl font-semibold mb-4'>Abstract</h2>
                    <p className='text-lg'>
                        {description}
                    </p>
                </div>
            </div>



            {/* ********************* */}

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

export default ArticleDetails;