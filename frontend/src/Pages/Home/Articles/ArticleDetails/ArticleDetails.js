import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ArticleDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>Article Details</h2>
        </div>
    );
};

export default ArticleDetails;