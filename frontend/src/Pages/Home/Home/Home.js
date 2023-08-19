import React from 'react';
import ReactSliderBasic from '../ReactSlider';
import JournalInfo from '../JournalInfo/JournalInfo';
import Articles from '../Articles/Article/Articles';

const Home = () => {
    return (
        <div>
            {/* <ReactSliderBasic></ReactSliderBasic> */}
            <JournalInfo></JournalInfo>
            <Articles></Articles>
        </div>
    );
};

export default Home;