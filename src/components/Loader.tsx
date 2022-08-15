import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className='loader flex justify-center min-h-[60px] w-[50px] mx-auto mt-[40px] relative'>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
            <span className='loader__circle h-[15px] w-[15px] rounded-full mx-[1px] border-[1px] border-black absolute left-[62%] top-5'></span>
        </div>
    );
};

export default Loader;