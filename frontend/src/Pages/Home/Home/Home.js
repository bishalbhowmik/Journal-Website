import React from 'react';
import ReactSliderBasic from '../ReactSlider';
import JournalInfo from '../JournalInfo/JournalInfo';
import Article from '../Articles/Article/Article';

const Home = () => {
    return (
        <div>
            <ReactSliderBasic></ReactSliderBasic>
            <JournalInfo></JournalInfo>
            <Article></Article>
        </div>
    );
};

export default Home;