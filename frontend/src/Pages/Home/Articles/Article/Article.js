import './Article.css';
import img1 from '../../../../images/img-1.jpg';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {

    const {id, title, author, publishInfo } = article;




    return (
        <div className='article'>
            <div className='article-area'>
                <div className='leftside shadow-lg bg-white'>
                    <div>
                        <div className="my-1">
                            <span className="border-solid border-[1px] rounded border-black p-1 text-xs">Original article</span>
                        </div>
                        <div>
                            <Link to={`articleDetails/${id}`} className=' artTitle text-xl font-semibold hover:underline hover:text-[#7FB2C8]'>{title}</Link>
                        </div>

                        <div className="text-sm text-[#313742] my-1">
                            <span>{author}</span>
                        </div>

                        <div className="artInfo">
                            <span> {publishInfo} </span>
                        </div>

                        <div className="artAccess">
                            <span>
                                <Link to={`articleDetails/${id}`} className="flex items-center gap-1 hover:text-[#7FB2C8] hover:underline transition-colors duration-500" href=""> Read the full article</Link>
                            </span>
                            <span>
                                <a className="flex items-center gap-1 hover:text-[#7FB2C8] hover:underline transition-colors duration-500" href="https://drive.google.com/file/d/1lB1_Sj03C0KmPrt92ERQ_sNGQfnu8B2T/view?usp=sharing"> Download PDF</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;