import React, { useEffect } from 'react';
import { useGetMoviesQuery } from '../store/moviesReducer';

const MoviesPage:React.FC = () => {
    const {isError, isLoading, data: movies} = useGetMoviesQuery();
    console.log(movies);
    

    return (
        <div className='container mx-auto px-3'>
            {movies?.items && movies?.items.length > 0 && movies?.items.map(movie => (
                <div className='relative w-[300px]' key={movie.kinopoiskId}>
                    <div className='w-[100%]'><img className='w-[100%]' src={movie.posterUrlPreview} alt="poster" /></div>
                    <div>
                        <h2>{movie.nameRu}</h2>
                        {movie.genres.map((genre) => (
                            <h2 key={movie.kinopoiskId + genre.genre}>{genre.genre}</h2>
                        ))}
                    </div>
                    <div className='flex absolute right-2 top-0 translate-y-[-50%] z-2'>
                        <h2 className='flex items-center justify-center p-[15px] rounded-full bg-orange-500 text-white'>{movie.ratingKinopoisk}</h2>
                        <h2>{movie.ratingImdb}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MoviesPage;