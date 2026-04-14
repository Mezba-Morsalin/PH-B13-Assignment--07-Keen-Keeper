import React from 'react';
import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/instagram.png'
import twitter from '../../../assets/twitter.png'
const Footer = () => {
    return (
        <div className='bg-[#244d3f] py-8 mt-24'>
            <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col gap-6 justify-center items-center'>
                <div className='text-center space-y-3'>
                <h2 className='text-5xl text-white font-bold'>Keen Keeper</h2>
                <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <div className='text-center space-y-3'>
                <h3 className='text-white text-xl'>Social Links</h3>
                <div className='flex gap-4 items-center'>
                    <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                </div>
            </div>
            </div>
            <div className='border-t border-base-300 py-4 flex justify-between items-center mt-7 w-11/12 lg:w-10/12 mx-auto'>
                <div>
                    <p className='text-white'>&copy; 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className='flex gap-5'>
                    <a className='text-white' href="#">Privacy Policy</a>
                    <a className='text-white' href="#">Terms of Service</a>
                    <a className='text-white' href="#">Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;