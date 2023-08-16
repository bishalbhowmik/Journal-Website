import React, { useState, useEffect } from 'react';
import img1 from '../../../images/img-1.jpg';
import img2 from '../../../images/img-2.jpg';
import './reactslider.css';

const ReactSliderBasic = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const item = [
        {
            id: 1, content: <div className='itemSlider'><button className='topHead'>Featured Article</button><h3 className='text-xl font-semibold'>Biofilm formation by the interaction of fungi (Candida tropicalis) with various bacteria

            </h3> <button className='discoverBtn'>Dicover now</button>
            </div>,
            img: <img src={img1} alt="img1" />
        },
        {
            id: 2, content: <div className='itemSlider'><button className='topHead'>Featured Article_2</button><h3>Biofilm formation by the interaction of fungi (Candida tropicalis) with various bacteria

            </h3> <button>J Adv Biotechnol Exp Ther. 2022; 6(1): 84-93.
                </button>

            </div>,
            img: <img src={img2} alt="img1" />
        },
        {
            id: 3, content: <div className='itemSlider'><button className='topHead'>Featured Article_3</button><h3>Biofilm formation by the interaction of fungi (Candida tropicalis) with various bacteria

            </h3>
                <p>J Adv Biotechnol Exp Ther. 2022; 6(1): 84-93.
                </p>
            </div>,
            img: <img src={img1} alt="img1" />
        },
        {
            id: 4, content: <div className='itemSlider'><button className='topHead'>Featured Article_3</button><h3>Biofilm formation by the interaction of fungi (Candida tropicalis) with various bacteria

            </h3> <p>J Adv Biotechnol Exp Ther. 2022; 6(1): 84-93.
                </p>
            </div>,
            img: <img src={img2} alt="img1" />
        }
    ];

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % item.length);
            console.log('slidre call here automaticly');
        }, 3000);

        setIntervalId(id);
        console.log('yes useEffect call here _1')
        return () => clearInterval(id);

    }, [currentIndex, item.length]);

    const handlerPrev = () => {
        clearInterval(intervalId);
        setCurrentIndex((currentIndex - 1) % item.length);
    }

    const handlerNext = () => {
        clearInterval(intervalId);
        setCurrentIndex((currentIndex + 1) % item.length);
    }
    const handlerClick = (itemIndex) => {
        clearInterval(intervalId);
        setCurrentIndex(itemIndex);
    }

    return (
        <>
            <div className='slider'>
                {
                    item.map((itemContent, index) => {
                        const isActive = index === currentIndex;
                        const className = `slider-item ${isActive ? 'active' : ''}`
                        return (
                            <div
                                className={className}
                                key={itemContent.id}

                            >
                                <div className='grid grid-cols-2'>
                                    <span>
                                        {
                                            itemContent.content
                                        }
                                    </span>
                                    <span className='w-[500px] mx-auto h-[500px] '>
                                        {
                                            itemContent.img
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='slider-controls'>
                    {/* <button onClick={handlerPrev}>
                        Prev
                    </button> */}
                    <div className='slider-indicator'>
                        {
                            item.map((_, index) => {
                                return (<span key={index}
                                    onClick={() => { handlerClick(index) }}
                                    className={`slider-indicator-item ${index === currentIndex ? 'active' : ''}`}
                                >
                                    {index + 1}
                                </span>)
                            })
                        }
                    </div>
                    {/* <button onClick={handlerNext}>
                        Next
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default ReactSliderBasic;