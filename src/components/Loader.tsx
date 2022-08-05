import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className='loader flex justify-center w-[50px] mx-auto mt-[40px]'>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black'></span>
        </div>
    );
};

export default Loader;