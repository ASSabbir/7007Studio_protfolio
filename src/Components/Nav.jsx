import React from 'react';

const Nav = () => {
    return (
        <div className=''>
            <div className='flex  justify-between items-center px-[7vw] py-[2vw]'>
                <div id='title-logo' className='text-7xl  overflow-hidden font-silverblack'>
                    7007 Studio
                </div>
                <ul className='flex gap-30  font-zendots text-xl'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>The Studio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;