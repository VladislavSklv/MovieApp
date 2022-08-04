import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addFilms } from '../store/movieSlice';
import { useGetMoviesQuery } from '../store/moviesReducer';

const MoviesPage:React.FC = () => {
    const {isError, isLoading, data} = useGetMoviesQuery({type: 'FILM'});
    const {movies} = useAppSelector((state) => state.movie);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(data?.items && data?.items.length > 0){
            dispatch(addFilms(data.items));
        }
    }, [data]);

    return (
        <div className='container mx-auto px-3'>
            <Loader/>
            {movies && <MoviesList movies={movies}/>}
        </div>
    );
};

export default MoviesPage;