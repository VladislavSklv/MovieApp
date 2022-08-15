import React, { useEffect, useState } from 'react';
import ErrorBlock from '../components/ErrorBlock';
import Filters from '../components/Filters';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import { useLazyGetMoviesQuery } from '../store/moviesReducer';
import MyButton from '../UI/MyButton';

const TvShowsPage = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [select, setSelect] = useState('NUM_VOTE');
    const [minRate, setMinRate] = useState(0);
    const [maxRate, setMaxRate] = useState(10);
    const [minYear, setMinYear] = useState(1000);
    const [maxYear, setMaxYear] = useState(3000);
    const [genre, setGenre] = useState('');
    const [country, setCountry] = useState('');
    const dependecies = {type: 'TV_SHOW', page, query, order: select, minRate, maxRate, minYear, maxYear, genre, country}

    const [fetchTvShows, {isError: isTvShowsError, isLoading: isTvShowsLoading, data: tvShows, isFetching: isTvShowsFetching}] = useLazyGetMoviesQuery();

    const onClickHandler = () => {
        fetchTvShows(dependecies);
    };

    useEffect(() => {
        fetchTvShows(dependecies);
    }, [])

    return (
        <div className='container mx-auto px-3 pb-4'>
            <Filters maxRate={maxRate} maxYear={maxYear} minRate={minRate} minYear={minYear} onClickHandler={onClickHandler} query={query} setMaxRate={setMaxRate} setMaxYear={setMaxYear} setMinRate={setMinRate} setMinYear={setMinYear} setPage={setPage} setQuery={setQuery} setSelect={setSelect} setGenre={setGenre} setCountry={setCountry}/>
            {(isTvShowsLoading || isTvShowsFetching) && <Loader/>}
            {isTvShowsError && <ErrorBlock/>}
            {(tvShows && tvShows !== undefined && tvShows.total > 0) && <MoviesList movies={tvShows.items}/>}
            {tvShows?.total === 0 && <div className='text-[32px] text-center font-bold'>Шоу не найдены</div>}
            {!isTvShowsError && tvShows !== undefined && tvShows.total > 0 &&
                <div className='flex justify-center mx-auto'>
                    <div className='inline-block toOrangeBg rounded'>
                        <MyButton 
                            onClickHandler={() => {window.scrollTo(0, 0); setPage(prev => prev - 1); fetchTvShows(dependecies)}} 
                            disabled={page === 1 && true}
                            className='toWhiteText font-mono inline-block border-black border-2 rounded uppercase text-sm px-[10px] pt-[5px] pb-[6px] text-[24px]'
                        >&#8592;</MyButton>
                    </div>
                    <div className='text-[#E58B1E] text-[32px] mx-[5px] grow-0 shrink-0 leading-[1.1]'>
                        {page}
                    </div>
                    <div className='inline-block toOrangeBg rounded'>
                        <MyButton 
                            onClickHandler={() => {window.scrollTo(0, 0); setPage(prev => prev + 1); fetchTvShows(dependecies)}} 
                            disabled={tvShows?.items.length < 20 && true}
                            className='toWhiteText font-mono inline-block border-black border-2 rounded uppercase text-sm px-[10px] pt-[5px] pb-[6px] text-[24px]'
                        >&#8594;</MyButton>
                    </div>
                </div>
            }
        </div>
    );
};

export default TvShowsPage;