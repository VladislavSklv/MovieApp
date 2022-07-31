import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMovie } from '../store/store';
import MovieCard from './MovieCard';

interface MoviesListProps {
    movies: IMovie[];
}

const MoviesList:React.FC<MoviesListProps> = ({movies}) => {
    return (
        <div className='flex flex-wrap justify-center items-baseline'>
            {movies.map(movie => (
                <MovieCard key={movie.kinopoiskId} movie={movie}/>
            ))}
        </div>
    );
};

export default MoviesList;