import React from 'react';
import { IComment } from '../store/store';

interface reviewProps {
    review: IComment;
}

const Review:React.FC<reviewProps> = ({review}) => {
    return (
        <div key={review.date.toString()} className='border-y-[1px] border-gray px-[20px] py-[15px] mb-[30px]'>
            <h2 className='text-[22px] font-bold'>{review.title}</h2>
            <div className='text-[18px] text-black/60 my-3'>{review.author}</div>
            <div className='text-[20px] whitespace-pre-wrap'>{review.description}</div>
            <div className='text-right text-[16px] text-black/60'><span className={review.type == 'POSITIVE' ? 'text-green-400 mr-[20px]' : 'text-red-500 mr-[20px]'}>{review.type == "POSITIVE" ? 'положительный' : "отрицательный"}</span>{new Date(review.date).toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}</div>
            <div className='flex'>
                <div className='text-green-400 text-[20px] mx-[5px]'>&#10084;{review.positiveRating}</div>
                <div className='relative text-red-500 text-[20px] mx-[5px]'><span className='relative text-[18px] top-[-2px]'>&#128148;</span>{review.negativeRating}</div>
            </div>
        </div>
    );
};

export default Review;