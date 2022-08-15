import React from 'react';
import { IFact } from '../store/store';

interface FactProps {
    fact: IFact;
}

const Fact: React.FC<FactProps> = ({fact}) => {
    return (
        <div className='px-[15px]'>
            {fact.spoiler 
                ? <div className='text-[16px] uppercase text-red-500 mb-[6px]'>Спойлеры</div> 
                : <div className='text-[16px] uppercase text-green-400 mb-[6px]'>Спойлеров нет</div>
            }
            <div className='text-[20px] whitespace-pre-wrap'>{fact.text.replace(/( |<([^>]+)>)/gi, ' ').replace(/&#\d*;/g, '')}</div>
        </div>
    );
};

export default Fact;