import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
    return (
        <div name='home' className='w-full h-screen  bg-[#0a192f]'>

            {/*Container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-red-400'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    Onwugbenu Zelunjo
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#889260]'>
                    I am a Frontend Developer.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I am a Frontend Developer specailising in building and occassionally
                    designing exceptional digital experiences. Currently i am focused on
                    building responsive Frontend web applications.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home