import React from 'react';

interface MyArrowProps {
    className?: string,
    style?: string[] | any,
    onClick?: any
}

const MyArrow:React.FC<MyArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block", borderRadius: '100%' }}
            onClick={onClick}
        />
    );
};

export default MyArrow;