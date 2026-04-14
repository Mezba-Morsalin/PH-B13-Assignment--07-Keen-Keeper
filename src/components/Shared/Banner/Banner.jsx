import React from 'react';

const Banner = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-18'>
            <div className='flex flex-col justify-center items-center gap-8'>
                <div className='space-y-3.5'>
                    <h2 className='text-5xl font-bold'>Friends to keep close in your life</h2>
                <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <div>
                    <button className='bg-[#244d3f] font-bold text-white rounded px-4 py-2 cursor-pointer'>+ Add Friend</button>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
                <div className='text-center space-y-3 shadow bg-white p-5 rounded-xl'>
                    <h3 className='text-[#244d3f] text-3xl font-bold'>10</h3>
                    <p className='text-[#64748B] text-lg'>Total Friends</p>
                </div>
                <div className='text-center space-y-3 shadow bg-white p-5 rounded-xl'>
                    <h3 className='text-[#244d3f] text-3xl font-bold'>3</h3>
                    <p className='text-[#64748B] text-lg'>On Track</p>
                </div>
                <div className='text-center space-y-3 shadow bg-white p-5 rounded-xl'>
                    <h3 className='text-[#244d3f] text-3xl font-bold'>6</h3>
                    <p className='text-[#64748B] text-lg'>Need Attention</p>
                </div>
                <div className='text-center space-y-3 shadow bg-white p-5 rounded-xl'>
                    <h3 className='text-[#244d3f] text-3xl font-bold'>12</h3>
                    <p className='text-[#64748B] text-lg'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;