import React from 'react';
import ReactSliderBasic from '../ReactSlider';
import JournalInfo from '../JournalInfo/JournalInfo';

const Home = () => {
    return (
        <div>
            <text className="4xl">Home</text>
            <ReactSliderBasic></ReactSliderBasic>
            <JournalInfo></JournalInfo>
        </div>
    );
};

export default Home;