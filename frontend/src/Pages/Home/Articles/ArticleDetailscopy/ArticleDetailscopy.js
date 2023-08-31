import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ArticleDetailscopy = () => {
    const data = useLoaderData();
    console.log(data);
    const {description} = data;
    
    return (
        <div>
            <h2>{description} </h2>
        </div>
    );
};

export default ArticleDetailscopy;