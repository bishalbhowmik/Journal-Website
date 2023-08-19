import React from 'react';

const Editors = () => {
    return (
        <div className='max-w-[70%] mx-auto p-5'>
            <div>
                <h3 className='text-2xl font-semibold text-center underline underline-offset-8'>For editors</h3>

                <p className='text-lg my-4'>Handling manuscripts</p>

                <ul className='list-disc'>
                    <li>A correspondent is recommended to be a submitter. In some cases, the representative author might be the submitter.</li>
                    <li>The authors' instructions should be read carefully before preparing the manuscript.</li>
                    <li>Provided abstract meets specified word numbers (not exceeding 240 words for Original Article and Review Article/Short Communication).</li>
                    <li>The cover letter should be prepared (should be inserted in the submission step).</li>
                    <li>The title page and the rest of the manuscript text should be prepared in the same file. Figure files (maximum 7-8, TIFF or JPEG), Figure legends (detailed), and Tables should be inserted immediately after the cited text in the main manuscript file. Tables and Figures with 300dpi JPG or TIFF files should also be uploaded separately in the submission system. The results section is to be separated from the discussion. The result section is also to be divided into subsections using subtitles.</li>
                </ul>
            </div>

            <div>
                <p className='text-lg my-4'>Promoting the journal</p>
                <p>JABET allows online submission. No e-mail submission is processed. All authors should read and apply the instructions, including specifications of file types for text and illustrations given on the site. Please submit a well-written and well-prepared manuscript. It will help us for giving you a decision quickly on your manuscript. If you have any queries, you may contact the editorial office at jabet.editor@gmail.com or jabet.editor@bsmiab.org. </p>
            </div>
        </div>
    );
};

export default Editors;