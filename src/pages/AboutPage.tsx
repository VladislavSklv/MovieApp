import React from 'react';

const AboutPage:React.FC = () => {
    return (
        <div className='container mx-auto px-3'>
            <h1 className='text-[24px] font-bold uppercase'>Немного об этом проекте</h1>
            <ul className='flex flex-col mt-[10px] mb-[20px]'>
                <div><li className='text-[22px] inline-block'>Стек:</li></div>
                <div><li className="toOrangeText text-[18px] inline-block listDisc">React </li></div>
                <div><li className="toOrangeText text-[18px] inline-block listDisc">Redux</li></div>
                <div><li className="toOrangeText text-[18px] inline-block listDisc">Redux Toolkit and Redux Toolkit Query</li></div>
                <div><li className="toOrangeText text-[18px] inline-block listDisc">TypeScript</li></div>
                <div><li className="toOrangeText text-[18px] inline-block listDisc">Tailwind CSS</li></div>
            </ul>
            <ul className='flex flex-col mb-[20px]'>
                <div><li className='text-[22px] inline-block'>Плагины:</li></div>
                <div><li className="toOrangeText text-[18px] inline-block listDisc">React Slick</li></div>
                <div><li className="toOrangeText text-[18px] inline-block listDisc">React Router DOM</li></div>
            </ul>
            <h2 className='text-[20px] text-[#E58B1E]'>Рекомендую вам посетить остальные страницы этого сайта ;)</h2>
        </div>
    );
};

export default AboutPage;