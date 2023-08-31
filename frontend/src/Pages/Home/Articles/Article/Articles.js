import React, { useEffect, useState } from 'react';
import Article from './Article';
import './Articles.css';
import { Link } from 'react-router-dom';

const Articles = () => {
    const [articleInfo, setArticleInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/article')
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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-3'>
                {
                    articleInfo.map(article => <Article
                        key={article.id}
                        article={article}
                    ></Article>)
                }
            </div>
            <div className='my-8 text-center'>
                <Link to="articles" className='btn btn-outline btn-sm text-xs'>More Articles</Link>
            </div>
        </div>
    );
};

export default Articles;