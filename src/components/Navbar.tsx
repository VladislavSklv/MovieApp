import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar:React.FC = () => {
    return (
        <nav className='h-[50px] bg-violet-600 flex items-center text-white'>
            <div className="container mx-auto px-3">
                <div className="flex items-center justify-between">
                    <Link to='/' className='font-bold text-xl transition-all duration-150 hover:scale-110 hover:mx-1'>MovieApp</Link>
                    <ul className='flex'>
                        <NavLink to='/about' className='mx-0.5 transition-all duration-150 hover:scale-110 hover:mx-3'>About</NavLink>
                        <NavLink to='/movies' className='mx-0.5 transition-all duration-150 hover:scale-110 hover:mx-3'>Movies</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;