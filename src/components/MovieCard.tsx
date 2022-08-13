import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMovie } from '../store/store';

interface MovieCardProps {
    movie: IMovie;
}

const MovieCard:React.FC<MovieCardProps> = ({movie}) => {
    const navigate = useNavigate();

    return (
        <div
            className='relative w-[200px] min-h-[276px] rounded mx-3 my-[30px] shadow-md cursor-pointer transition-all hover:shadow-2xl hover:scale-[103%] shrink-0 grow-0' 
            onClick={() => navigate(`${movie.kinopoiskId}`,{replace: false})}
        >
            <div className='w-[100%] h-[276px]'><img className='w-[100%] h-[100%] rounded-t' src={movie.posterUrlPreview} alt="poster" /></div>
            <div className='rounded-b shadow-outset px-[7px] pb-[3px]'>
                <h2 className='font-mono font-bold text-[18px]'>{movie.nameRu || movie.nameOriginal}</h2>
                <p className='font-mono text-black/30'>{movie.year}, {movie.genres[0].genre}</p>
            </div>
            <div className='flex absolute right-2 top-0 translate-y-[-50%] z-2'>
                <div className='relative'>
                    <h2 className='flex items-center justify-center px-[10px] py-[4px] rounded bg-[#E58B1E] text-white mx-0.5 min-w-[40px] table-vote'>{movie.ratingKinopoisk || 'N'}</h2>
                    <div className='absolute top-[-40px] left-[15px] transition-opacity block bg-[grey] px-[6px] py-[4px] rounded text-white tables opacity-0 pointer-events-none whitespace-nowrap'>рейтинг Kinopoisk</div>
                </div>
                <div className='relative'>
                    <h2 className='flex items-center justify-center px-[10px] py-[4px] rounded bg-[#F5C518] text-white mx-0.5 min-w-[40px] table-vote'>{movie.ratingImdb || 'N'}</h2>
                    <div className='absolute top-[-40px] left-[15px] transition-opacity block bg-[grey] px-[6px] py-[4px] rounded text-white tables opacity-0 pointer-events-none whitespace-nowrap'>рейтинг IMDB</div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;