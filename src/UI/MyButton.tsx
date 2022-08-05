import React from 'react';

interface myButtonProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const MyButton: React.FC<myButtonProps> = ({setPage}: myButtonProps) => {
    return (
        <div className='text-center'>
            <button 
                className='inline-block border-black border-2 rounded uppercase text-sm transition-all px-[20px] py-[10px]'
                onClick={() => {setPage(prev => prev + 1)}}
                >
                Показать больше
            </button>
        </div>
    );
};

export default MyButton;