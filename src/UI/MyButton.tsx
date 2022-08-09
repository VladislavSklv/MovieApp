import React, { ButtonHTMLAttributes, ReactNode } from 'react';
type myButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    onClickHandler: () => void,
    children: ReactNode,
}

const MyButton: React.FC<myButtonProps> = ({onClickHandler, children, ...props}: myButtonProps) => {
    return (
        <button 
            onClick={onClickHandler}
            {...props}
        >{children}</button>
    );
};

export default MyButton;