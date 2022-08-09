import React, { useEffect, useState } from 'react';
import ErrorBlock from '../components/ErrorBlock';
import Filters from '../components/Filters';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import { useLazyGetMoviesQuery } from '../store/moviesReducer';
import MyButton from '../UI/MyButton';

const MoviesPage:React.FC = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [select, setSelect] = useState('NUM_VOTE');
    const [minRate, setMinRate] = useState(0);
    const [maxRate, setMaxRate] = useState(10);
    const [minYear, setMinYear] = useState(1000);
    const [maxYear, setMaxYear] = useState(3000);
    const [genre, setGenre] = useState('');
    const [country, setCountry] = useState('');
    const [fetchMovies, {isError: isMoviesError, isFetching: isMoviesFetching, isLoading: isMoviesLoading, data: movies} ] = useLazyGetMoviesQuery();

    const dependecies = {type: 'FILM', page, query, order: select, minRate, maxRate, minYear, maxYear, genre, country}

    useEffect(() => {
        fetchMovies(dependecies);
    }, []);

    const onClickHandler = () => {
        fetchMovies(dependecies);
    };

    return (
        <div className='container mx-auto px-3 pb-4'>
            <Filters maxRate={maxRate} maxYear={maxYear} minRate={minRate} minYear={minYear} onClickHandler={onClickHandler} query={query} setMaxRate={setMaxRate} setMaxYear={setMaxYear} setMinRate={setMinRate} setMinYear={setMinYear} setPage={setPage} setQuery={setQuery} setSelect={setSelect} setGenre={setGenre} setCountry={setCountry}/>
            {isMoviesLoading || isMoviesFetching && <Loader/>}
            {isMoviesError && <ErrorBlock/>}
            {movies && movies !== undefined && <MoviesList movies={movies?.items}/>}
            {!isMoviesError && movies !== undefined && movies &&
                <div className='flex justify-center mx-auto'>
                    <MyButton 
                        onClickHandler={() => {window.scrollTo(0, 0); setPage(prev => prev - 1); fetchMovies(dependecies)}} 
                        disabled={page === 1 && true}
                        className='inline-block border-black border-2 rounded uppercase text-sm transition-all px-[10px] py-[5px] text-[24px]'
                    >&#8592;</MyButton>
                    <MyButton 
                        onClickHandler={() => {window.scrollTo(0, 0); setPage(prev => prev + 1); fetchMovies(dependecies)}} 
                        disabled={movies?.items.length < 20 && true}
                        className='inline-block border-black border-2 rounded uppercase text-sm transition-all px-[10px] py-[5px] text-[24px]'
                    >&#8594;</MyButton>
                </div>
            }
        </div>
    );
};

export default MoviesPage;