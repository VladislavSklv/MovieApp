import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ErrorBlock from '../components/ErrorBlock';
import Filters from '../components/Filters';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import { useAppSelector } from '../hooks/redux';
import useFilms from '../hooks/useFilms';
import { addSeries } from '../store/movieSlice';
import { useGetMoviesQuery, useLazyGetMoviesQuery } from '../store/moviesReducer';
import MyButton from '../UI/MyButton';

const SeriesPage:React.FC = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [select, setSelect] = useState('NUM_VOTE');
    const [minRate, setMinRate] = useState(0);
    const [maxRate, setMaxRate] = useState(10);
    const [minYear, setMinYear] = useState(1000);
    const [maxYear, setMaxYear] = useState(3000);
    const [genre, setGenre] = useState('');
    const [country, setCountry] = useState('');
    const dependecies = {type: 'TV_SERIES', page, query, order: select, minRate, maxRate, minYear, maxYear, genre, country}

    const [fetchSeries, {isError: isSeriesError, isLoading: isSeriesLoading, data: series, isFetching: isSeriesFetching}] = useLazyGetMoviesQuery();

    const onClickHandler = () => {
        fetchSeries(dependecies);
    };

    useEffect(() => {
        fetchSeries(dependecies);
    }, []);


    return (
        <div className='container mx-auto px-3 pb-4'>
            <Filters maxRate={maxRate} maxYear={maxYear} minRate={minRate} minYear={minYear} onClickHandler={onClickHandler} query={query} setMaxRate={setMaxRate} setMaxYear={setMaxYear} setMinRate={setMinRate} setMinYear={setMinYear} setPage={setPage} setQuery={setQuery} setSelect={setSelect} setGenre={setGenre} setCountry={setCountry}/>
            {(isSeriesLoading || isSeriesFetching) && <Loader/>}
            {isSeriesError && <ErrorBlock/>}
            {(series && series !== undefined && series.total > 0) && <MoviesList movies={series.items}/> }
            {series?.total === 0 && <div className='text-[32px] text-center font-bold'>Сериалы не найдены</div>}
            {!isSeriesError && series !== undefined && series.total > 0 &&
                <div className='flex justify-center mx-auto'>
                    <MyButton 
                        onClickHandler={() => {window.scrollTo(0, 0); setPage(prev => prev - 1); fetchSeries(dependecies)}} 
                        disabled={page === 1 && true}
                        className='inline-block border-black border-2 rounded uppercase text-sm transition-all px-[10px] py-[5px] text-[24px]'
                    >&#8592;</MyButton>
                    <MyButton 
                        onClickHandler={() => {window.scrollTo(0, 0); setPage(prev => prev + 1); fetchSeries(dependecies)}} 
                        disabled={series?.items.length < 20 && true}
                        className='inline-block border-black border-2 rounded uppercase text-sm transition-all px-[10px] py-[5px] text-[24px]'
                    >&#8594;</MyButton>
                </div>
            }
        </div>
    );
};

export default SeriesPage;