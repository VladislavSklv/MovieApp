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
            onClick={() => navigate(`/movies/${movie.kinopoiskId}`,{replace: true})}
        >
            <div className='w-[100%] h-[276px]'><img className='w-[100%] h-[100%] rounded-t' src={movie.posterUrlPreview} alt="poster" /></div>
            <div className='rounded-b shadow-outset px-[7px] pb-[3px]'>
                <h2 className='font-mono font-bold text-[18px]'>{movie.nameRu || movie.nameOriginal}</h2>
                {/* {movie.genres.map((genre) => (
                    <h2 className='font-mono' key={movie.kinopoiskId + genre.genre}>{genre.genre}</h2>
                ))} */}
                <p className='font-mono text-black/30'>{movie.year}, {movie.genres[0].genre}</p>
            </div>
            <div className='flex absolute right-2 top-0 translate-y-[-50%] z-2'>
                <h2 className='flex items-center justify-center px-[10px] py-[4px] rounded bg-orange-500 text-white mx-0.5 min-w-[40px]'>{movie.ratingKinopoisk}</h2>
                <h2 className='flex items-center justify-center px-[10px] py-[4px] rounded bg-green-500 text-white mx-0.5 min-w-[40px]'>{movie.ratingImdb}</h2>
            </div>
        </div>
    );
};

export default MovieCard;