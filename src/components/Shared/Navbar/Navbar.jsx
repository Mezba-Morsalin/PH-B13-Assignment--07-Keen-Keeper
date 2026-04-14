import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink to='/' className={({isActive}) => isActive ? ' bg-[#244d3f] font-bold text-white rounded px-4 py-2' : 'text-gray-600 px-4 py-2'}><IoHomeOutline></IoHomeOutline>Home</NavLink>
            </li>
            <li>
                <NavLink to='/timeline' className={({isActive}) => isActive ? 'bg-[#244d3f] font-bold text-white rounded px-4 py-2' : 'text-gray-600 px-4 py-2'}><FaRegClock></FaRegClock> TImeline</NavLink>
            </li>
            <li>
                <NavLink to='/stats' className={({isActive}) => isActive ? 'bg-[#244d3f] font-bold text-white rounded px-4 py-2' : 'text-gray-600 px-4 py-2'}><TfiStatsUp></TfiStatsUp>Stats</NavLink>
            </li>
        </>
    )
    return (
        <div className='shadow-sm py-4 bg-white'>
            <div className="flex justify-between  w-11/12 lg:w-10/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <Link to='/' className='text-green-900 text-3xl font-semibold'><span className='text-black text-3xl font-bold'>Keen</span>Keeper</Link>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 flex gap-3">
      {
        links
      }
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;