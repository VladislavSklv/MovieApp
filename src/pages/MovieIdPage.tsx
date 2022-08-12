import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorBlock from '../components/ErrorBlock';
import Loader from '../components/Loader';
import { useGetMovieByIdQuery, useGetShotsByIdQuery, useGetSimilarsByIdQuery, useGetTrailerByIdQuery } from '../store/moviesReducer';
import Slider from 'react-slick';
import MyArrow from '../UI/MyArrow';

interface movieIdPageProps {
    urlPath: string
}

const MovieIdPage:React.FC<movieIdPageProps> = ({urlPath}) => {
    const { kinopoiskId } = useParams();
    const { isLoading, isError, data } = useGetMovieByIdQuery({kinopoiskId});
    const { data: trailers } = useGetTrailerByIdQuery({kinopoiskId});
    const {data: shots} = useGetShotsByIdQuery({kinopoiskId});
    const {data: similars} = useGetSimilarsByIdQuery({kinopoiskId});

    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <MyArrow/>,
        nextArrow: <MyArrow/>,
    };

    const PhotosSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: <MyArrow/>,
        nextArrow: <MyArrow/>,
        adaptiveHeight: true,
    };

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
            {isLoading && <Loader />}
            {isError && <ErrorBlock />}
            {(data && data !== undefined) && 
                <div>
                    {data.coverUrl && <div className='coverImg fixed top-0 z-[-2]'><div className='z-[-2]'><img className='h-[100vh] max-w-[auto] lg:max-w-[100%] lg:h-[auto]' src={data.coverUrl} alt="cover" /></div></div>}
                    {!data.coverUrl && <div className='fixed top-0 z-[-1] bg-black/90 w-[100%] h-[100vh]'></div>}
                    <div className='bg-white relative mt-[65vh] shadow-inset pt-[20px] pb-[75px] lg:pb-[55px] mb-[50vh] text-[22px] font-mono'>
                        <div className='container mx-auto px-6 pb-4'>
                            <div className='flex flex-col lg:flex-row'>
                                <div className='relative w-[300px] mx-auto lg:mx-0 lg:mr-6'>
                                    <div className='rounded w-[300px] grow-0 shrink-0 mr-6 shadow-md'><img className='rounded-[7px] w-[100%]' src={data.posterUrl} alt="poster"/></div>
                                    <div className='absolute top-0 left-[5px] flex font-sans text-[16px]'>
                                        <div className='relative translate-y-[-50%] whitespace-nowrap'>
                                            <div className='flex shrink-0 grow-0 items-center justify-center px-[10px] py-[4px] rounded bg-[#EF4444] text-white mx-0.5 min-w-[40px] table-vote'>{data.ratingFilmCritics || 'N'}</div>
                                            <div className='absolute top-[-40px] left-[15px] transition-opacity block bg-[grey] px-[6px] py-[4px] rounded text-white tables opacity-0 pointer-events-none'>{data.ratingFilmCriticsVoteCount} голосов критиков</div>
                                        </div>
                                        <div className='relative translate-y-[-50%] whitespace-nowrap'>
                                            <div className='flex shrink-0 grow-0 items-center justify-center px-[10px] py-[4px] rounded bg-[#E58B1E] text-white mx-0.5 min-w-[40px] table-vote'>{data.ratingKinopoisk || 'N'}</div>
                                            <div className='absolute top-[-40px] left-[15px] transition-opacity block bg-[grey] px-[6px] py-[4px] rounded text-white tables opacity-0 pointer-events-none'>{data.ratingKinopoiskVoteCount} голосов Kinopoisk</div>
                                        </div>
                                        <div className='relative translate-y-[-50%] whitespace-nowrap'>
                                            <div className='flex shrink-0 grow-0 items-center justify-center px-[10px] py-[4px] rounded bg-[#F5C518] text-white mx-0.5 min-w-[40px] table-vote'>{data.ratingImdb || 'N'}</div>
                                            <div className='absolute top-[-40px] left-[15px] transition-opacity block bg-[grey] px-[6px] py-[4px] rounded text-white tables opacity-0 pointer-events-none'>{data.ratingImdbVoteCount} голосов IMDB</div>
                                        </div>
                                    </div>
                                    <div className='absolute top-0 right-[10px] translate-y-[-40%] flex items-center justify-center shrink-0 px-[4px] py-[7px] bg-white border-[4px] border-red-500 rounded-[100%] min-w-[50px] text-[18px] leading-[1.5] age-limit'>{data.ratingAgeLimits.replace(/[^+\d]/g, '')}+</div>
                                    <Slider className='w-[300px] mt-[20px] mb-[80px] lg:mb-0' {...settings}>
                                        {trailers?.items.map(trailer => (
                                            (trailer.site === 'KINOPOISK_WIDGET') && <div className='w-[300px] h-[200px]'><iframe is="x-frame-bypass" key={trailer.name} src={trailer.url} width="300" height="200"></iframe></div>
                                        ))}
                                    </Slider>
                                </div>
                                <div>
                                    <div className='font-bold text-[32px] leading-[1] mb-2'>{data.nameRu || data.nameOriginal}</div>
                                    <div className='min-w-[300px]'>{data.description}</div>
                                    <div className='items-center flex-col md:flex-row md:items-start lg:flex-col lg:items-center xl:items-start xl:flex-row flex flex-wrap mt-7'>
                                        <div className='flex flex-wrap mb-[20px] md:mb-0 lg:mb-[20px] xl:mb-0'>
                                            <ul className='mr-5 text-[20px] text-black/75'>
                                                <li className='text-[22px]'>Страны: </li>
                                                {data.countries.map(country => (
                                                    <li>{country.country}</li>
                                                ))}
                                            </ul>
                                            <ul className=' text-[20px] text-black/75 mr-5'>
                                                <li className='text-[22px]'>Жанр: </li>
                                                {data.genres.map(genre => (
                                                    <li>{genre.genre}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        {shots !== undefined && 
                                        <div className='mx-auto lg:mx-auto'>
                                            <Slider className='w-[300px] sm:w-[400px] xl:w-[600px]' {...PhotosSettings}>
                                                {shots?.items.map(shot => (
                                                    <img src={`${shot.imageUrl}`} alt="shot" key={shot.imageUrl}/>
                                                ))}
                                            </Slider>
                                        </div>}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {(similars !== undefined && similars?.items.length > 0) && 
                        <div className='slick-dots--10 bg-white relative shadow-inset py-[20px] mb-[10vh] text-[22px] font-mono'>
                            <h2 className='text-center text-[32px] font-bold'>Похожие фильмы</h2>
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
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default MovieIdPage;