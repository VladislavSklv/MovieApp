import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar:React.FC = () => {
    return (
        <nav className='h-[50px] flex bg-[white] items-center text-black'>
            <div className="container mx-auto px-3">
                <div className="flex items-center justify-between">
                    <Link to='/' className='toOrangeText font-bold text-xl hover:scale-110 hover:mx-1'>MovieApp</Link>
                    <ul className='flex'>
                        <NavLink to='/movies' className='toOrangeText mx-0.5 hover:scale-125 hover:mx-4'>Movies</NavLink>
                        <NavLink to='/series' className='toOrangeText mx-0.5 hover:scale-125 hover:mx-4'>Series</NavLink>
                        <NavLink to='/tvshows' className='toOrangeText mx-0.5 hover:scale-125 hover:mx-4'>TV Shows</NavLink>
                        <NavLink to='/about' className='toOrangeText mx-0.5 hover:scale-125 hover:mx-4'>About</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;