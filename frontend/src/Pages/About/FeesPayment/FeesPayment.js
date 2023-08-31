import React from 'react';

const FeesPayment = () => {
    return (
        <div>
            <div className="max-w-[90%] mx-auto">
                <h1 className='text-3xl font-semibold underline underline-offset-4 decoration-red-950 my-10' >
                Fees and payments
                </h1>
                <div>


                    <ul className='list-disc text-[18px] ml-10'>

                        <li>JABET does not receive any submission charges from authors</li>
                        <li className='mb-4'>Article processing charges (used as Journal’s maintenance cost only).
                            <p className='text-[18px] mt-3'>JABET is a self-supporting journal and does not have funding from any institution/government. Hence, the management of the journal has to be solely financed by the article processing charges (APC) received from authors / their academics/donors. The APC is requested to meet maintenance of different expenses such as website maintenance, hosting, domain, application development, DOI, plagiarism checking, ejmanager (online submission, review, and editorial system), SEO services, proofreading, grammatical editing, typesetting of article’s PDF, and so on. Thus, authors are requested to pay the APC only for their accepted articles. When an article is accepted, processed, reviewed, and authorized for publication, further payment instructions are provided to the corresponding author or article submitter through e-mail. APC should be paid within 7 days as per instructions given in the e-mail. If there is any fee for APC sending, it should be paid by the author.</p>
                        </li>
                        <li>Authors are requested to pay APC @ USD 269 only for each accepted article (online version).

                            <p className='text-[18px] mt-1'>–For international authors/donors: JABET receives payment through Bank Transfer or PayPal.</p>
                            <p className='text-[18px] mt-1'>––For domestic authors/donors: JABET receives payment through Bank Transfer or bKash.</p>
                            <p className='text-[18px] mt-1'>–More detailed and specific APC payment information will be provided through e-mail after acceptance of the manuscript.</p>
                        </li>
                    </ul>

                    <p className='text-[18px] my-5'><strong> NOTE: </strong>
                        If you face any difficulty to make a payment or if you want to pay through other ways, please send us an e-mail at jabet.editor@gmail.com or jabet.editor@bsmiab.org. We will respond to you with further instructions on how to proceed with payment by bank transfer or any other means for payment of the article processing charges. Under special circumstances, APC payment can be waived up to 50%. However, no discount/waiver request on the APC is considered after the submission of the article on our system.
                    </p>
                </div>





            </div>
        </div>
    );
};

export default FeesPayment;