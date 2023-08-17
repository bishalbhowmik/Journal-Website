import React, { useEffect, useState } from 'react';
import Article from './Article';
import './Articles.css';

const Articles = () => {
    const [articleInfo, setArticleInfo] = useState([]);

    useEffect(() => {
        fetch('articleInfo.json')
            .then(res => res.json())
            .then(data => setArticleInfo(data))
    }, [])

    console.log(articleInfo);

    return (
        <div>
            <div className="text-center my-5 article-header">
                <h1 className='text-3xl font-semibold'>Articles</h1>
                <hr />
            </div>
            <div className='grid grid-cols-2 gap-x-3'>
                {
                    articleInfo.map(article => <Article
                        key={article.id}
                        article={article}
                    ></Article>)
                }
            </div>
            <div className='my-8 text-center'>
                <button className='btn btn-outline btn-sm text-xs'>More Articles</button>
            </div>
        </div>
    );
};

export default Articles;