import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { RootSimilars } from '../store/store';
import MyArrow from '../UI/MyArrow';

interface similarBlockProps {
    similars: RootSimilars;
    urlPath: string;
    title: string;
}

const SimilarsBlock:React.FC<similarBlockProps> = ({similars, urlPath, title}) => {

    const navigate = useNavigate();

    const SimilarSettings = {
        dots: true,
        infinite: true,
        variableWidth: true,
        centerMode: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <MyArrow/>,
        nextArrow: <MyArrow/>,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                dots: false
              }
            }
        ]
    };

    return (
        <>
            <h2 className='text-center text-[32px] font-bold'>{title}</h2>
            <Slider className='w-[210px] mx-auto mb-[70px] md:w-[630px] xl:w-[1050px] ' {...SimilarSettings}>
                {similars?.items.map(similar => (
                    <div
                        key={similar.posterUrl}
                        className='relative w-[200px] min-h-[276px] rounded mx-[5px] my-[30px] shadow-md cursor-pointer transition-all hover:scale-[103%] shrink-0 grow-0' 
                        onClick={() => {window.scrollTo(0, 0); navigate(`/${urlPath}/${similar.filmId}`,{replace: false})}}
                    >
                        <div className='w-[100%] h-[276px]'><img className='w-[100%] h-[100%] rounded-t' src={similar.posterUrlPreview} alt="poster" /></div>
                        <div className='rounded-b shadow-outset px-[7px] pb-[3px]'>
                            <h2 className='font-mono font-bold text-[18px]'>{similar.nameRu || similar.nameOriginal}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default SimilarsBlock;