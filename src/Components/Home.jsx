import React from 'react';
import Banner from './Home/Banner';
import Marque from './Home/Marque';
import Second from './Home/Second';
import SecondTitle from './Home/SecondTitle';

const Home = () => {
    return (
        <div className='text-7xl  '>
           <Banner></Banner>
           <Marque></Marque>
           <SecondTitle></SecondTitle>
           <Second></Second>
        </div>
    );
};

export default Home;