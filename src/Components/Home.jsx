import React from 'react';
import Banner from './Home/Banner';
import Marque from './Home/Marque';
import Second from './Home/Second';

const Home = () => {
    return (
        <div className='text-7xl  '>
           <Banner></Banner>
           <Marque></Marque>
           <Second></Second>
        </div>
    );
};

export default Home;