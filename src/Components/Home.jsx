import React from 'react';
import Banner from './Home/Banner';
import Marque from './Home/Marque';

import SecondTitle from './Home/SecondTitle';

const Home = () => {
    return (
        <div className='text-7xl  '>
           <Banner></Banner>
           <Marque></Marque>
           <SecondTitle></SecondTitle>
           
        </div>
    );
};

export default Home;