import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar:React.FC = () => {
    return (
        <nav className='h-[50px] bg-violet-600 flex items-center text-white'>
            <div className="container mx-auto px-3">
                <div className="flex items-center justify-between">
                    <Link to='/' className='font-bold text-xl transition-all duration-150 hover:scale-110 hover:mx-1'>MovieApp</Link>
                    <ul className='flex'>
                        <NavLink to='/movies' className='mx-0.5 transition-all duration-150 hover:scale-125 hover:mx-4'>Movies</NavLink>
                        <NavLink to='/series' className='mx-0.5 transition-all duration-150 hover:scale-125 hover:mx-4'>Series</NavLink>
                        <NavLink to='/tvshows' className='mx-0.5 transition-all duration-150 hover:scale-125 hover:mx-4'>TV Shows</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;