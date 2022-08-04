import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className='loader flex'>
            <span className='loader__circle h-[15px] w-[15px] rounded-full bg-black'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full bg-black'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full bg-black'></span>
        </div>
    );
};

export default Loader;