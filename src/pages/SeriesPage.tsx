import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ErrorBlock from '../components/ErrorBlock';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import { useAppSelector } from '../hooks/redux';
import useFilms from '../hooks/useFilms';
import { addSeries } from '../store/movieSlice';
import { useGetMoviesQuery } from '../store/moviesReducer';
import MyButton from '../UI/MyButton';

const SeriesPage:React.FC = () => {
    const [page, setPage] = useState(1);
    const {series} = useAppSelector((state) => state.movie);
    const dispatch = useDispatch();
    const {isError, isLoading, data} = useGetMoviesQuery({type: 'TV_SERIES', page});
    
    useFilms(data, series, dispatch, addSeries);

    return (
        <div className='container mx-auto px-3 pb-4'>
            {series && <MoviesList movies={series}/> }
            {isLoading && <Loader/>}
            {isError && <ErrorBlock/>}
            {series && <MyButton setPage={setPage} />}
        </div>
    );
};

export default SeriesPage;