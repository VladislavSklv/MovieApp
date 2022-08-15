import React, { AnchorHTMLAttributes, useRef } from 'react';
import { IComment } from '../store/store';

interface reviewProps {
    review: IComment;
}

const Review:React.FC<reviewProps> = ({review}) => {
    const ref = useRef(null);

    return (
        <div id={review.date.toString()} key={review.date.toString()} className='border-y-[1px] border-gray px-[20px] py-[15px] mb-[30px]'>
            <h2 className='text-[22px] font-bold'>{review.title}</h2>
            <div className='text-[18px] text-black/60 my-3'>{review.author}</div>
            <div ref={ref} className='text-[20px] whitespace-pre-wrap h-[115px] mb-[10px] overflow-hidden'>{review.description}</div>
            <a 
                href={`#${review.date.toString()}`}
                className='cursor-pointer text-[16px] underline text-black/70'
                onClick={(e) => {
                            if((e.target as HTMLAnchorElement).classList.contains('active')){
                                (e.target as HTMLAnchorElement).classList.remove('active');
                                (ref.current as unknown as HTMLElement).style.height = '115px';
                                (e.target as HTMLAnchorElement).innerHTML = 'Развернуть...';
                            } else {
                                (e.target as HTMLAnchorElement).classList.add('active');
                                (ref.current as unknown as HTMLElement).style.height = 'auto';
                                (e.target as HTMLAnchorElement).innerHTML = 'Свернуть...';
                            }
                        }}
            >Развернуть...</a>
            <div className='text-right text-[16px] text-black/60'><span className={review.type == 'POSITIVE' ? 'text-green-400 mr-[20px]' : 'text-red-500 mr-[20px]'}>{review.type == "POSITIVE" ? 'положительный' : "отрицательный"}</span>{new Date(review.date).toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}</div>
            <div className='flex'>
                <div className='text-green-400 text-[20px] mx-[5px]'>&#10084;{review.positiveRating}</div>
                <div className='relative text-red-500 text-[20px] mx-[5px]'><span className='relative text-[18px] top-[-2px]'>&#128148;</span>{review.negativeRating}</div>
            </div>
        </div>
    );
};

export default Review;