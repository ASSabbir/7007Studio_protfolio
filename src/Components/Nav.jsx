import React from 'react';

const Nav = () => {
    return (
        <div className=''>
            <div className='flex  justify-between items-center px-[7vw] py-[2vw]'>
                <div  className='text-7xl  overflow-hidden font-silverblack'>
                    <h1 id='title-logo'> 7007 Studio</h1>
                </div>
                <ul className='flex gap-30  font-zendots text-xl'>
                    <li className='navlins'>Home</li>
                    <li className='navlins'>Projects</li>
                    <li className='navlins'>The Studio</li>
                    <li className='navlins'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;