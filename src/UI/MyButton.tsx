import React, { ReactNode } from 'react';
interface myButtonProps {
    onClickHandler: () => void;
    children: ReactNode;
    disabled?: boolean;
}

const MyButton: React.FC<myButtonProps> = ({onClickHandler, children, disabled}: myButtonProps) => {
    return (
        <div className='text-center'>
            <button 
                className='inline-block border-black border-2 rounded uppercase text-sm transition-all px-[10px] py-[5px] text-[24px]'
                onClick={onClickHandler}
                disabled={disabled}
                >
                {children}
            </button>
        </div>
    );
};

export default MyButton;