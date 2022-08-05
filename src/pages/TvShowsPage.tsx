import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ErrorBlock from '../components/ErrorBlock';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import { useAppSelector } from '../hooks/redux';
import useFilms from '../hooks/useFilms';
import { addTvShows } from '../store/movieSlice';
import { useGetMoviesQuery } from '../store/moviesReducer';
import MyButton from '../UI/MyButton';

const TvShowsPage = () => {
    const [page, setPage] = useState(1);
    const {tvShows} = useAppSelector((state) => state.movie);
    const dispatch = useDispatch();
    const {isError, isLoading, data} = useGetMoviesQuery({type: 'TV_SHOW', page});

    useFilms(data, tvShows, dispatch, addTvShows);

    return (
        <div className='container mx-auto px-3 pb-4'>
            {tvShows && <MoviesList movies={tvShows}/>}
            {isLoading && <Loader/>}
            {isError && <ErrorBlock/>}
            {tvShows && <MyButton setPage={setPage} />}
        </div>
    );
};

export default TvShowsPage;