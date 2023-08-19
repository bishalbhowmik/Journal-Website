import React from 'react';

const Authors = () => {
    return (
        <div className='max-w-[70%] mx-auto p-5'>
            <h3 className='text-2xl font-semibold text-center underline underline-offset-8'>For authors</h3>
            <p className='text-lg my-4'>Submission Checklist</p>
            <ul className='list-disc'>
                <li>A correspondent is recommended to be a submitter. In some cases, the representative author might be the submitter.</li>
                <li>The authors' instructions should be read carefully before preparing the manuscript.</li>
                <li>Provided abstract meets specified word numbers (not exceeding 240 words for Original Article and Review Article/Short Communication).</li>
                <li>The cover letter should be prepared (should be inserted in the submission step).</li>
                <li>The title page and the rest of the manuscript text should be prepared in the same file. Figure files (maximum 7-8, TIFF or JPEG), Figure legends (detailed), and Tables should be inserted immediately after the cited text in the main manuscript file. Tables and Figures with 300dpi JPG or TIFF files should also be uploaded separately in the submission system. The results section is to be separated from the discussion. The result section is also to be divided into subsections using subtitles.</li>
            </ul>
        </div>
    );
};

export default Authors;