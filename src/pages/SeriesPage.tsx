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
    const {isError, isLoading, data} = useGetMoviesQuery({type: 'TV_SERIES', page, query: '', order: 'NUM_VOTE', minRate: 0, maxRate: 10, minYear: 1000, maxYear: 3000});
    
    useFilms(data, series, dispatch, addSeries);

    return (
        <div className='container mx-auto px-3 pb-4'>
            {series && <MoviesList movies={series}/> }
            {isLoading && <Loader/>}
            {isError && <ErrorBlock/>}
            {!isLoading && !isError && 
                <div className='flex'>
                    <MyButton onClickHandler={() => setPage(prev => prev - 1)}>Назад</MyButton>
                    <MyButton onClickHandler={() => setPage(prev => prev + 1)}>Вперёд</MyButton>
                </div>
            }
        </div>
    );
};

export default SeriesPage;