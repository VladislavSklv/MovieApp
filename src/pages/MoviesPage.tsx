import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ErrorBlock from '../components/ErrorBlock';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import { useAppSelector } from '../hooks/redux';
import useFilms from '../hooks/useFilms';
import { addFilms } from '../store/movieSlice';
import { useGetMoviesQuery } from '../store/moviesReducer';
import MyButton from '../UI/MyButton';
import MySearch from '../UI/MySearch';

const MoviesPage:React.FC = () => {
    const {movies} = useAppSelector((state) => state.movie);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const {isError, isLoading, data} = useGetMoviesQuery({type: 'FILM', page});
    

    useFilms(data, movies, dispatch, addFilms);

    return (
        <div className='container mx-auto px-3 pb-4'>
            <div>
                <MySearch setQuery={setQuery} query={query}  />
            </div>
            {movies && <MoviesList movies={movies}/>}
            {isLoading && <Loader/>}
            {isError && <ErrorBlock/>}
            {movies && <MyButton setPage={setPage} />}
        </div>
    );
};

export default MoviesPage;