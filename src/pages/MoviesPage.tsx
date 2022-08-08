import React, { useEffect, useRef, useState } from 'react';
import ErrorBlock from '../components/ErrorBlock';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import { useGetMoviesQuery } from '../store/moviesReducer';
import MyButton from '../UI/MyButton';
import MyRange from '../UI/MyRange';
import MySearch from '../UI/MySearch';
import MySelect, { selectOption } from '../UI/MySelect';

const MoviesPage:React.FC = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [select, setSelect] = useState('NUM_VOTE');
    const [minRate, setMinRate] = useState(0);
    const [maxRate, setMaxRate] = useState(10);
    const [minYear, setMinYear] = useState(1000);
    const [maxYear, setMaxYear] = useState(3000);
    const {isError, isLoading, data} = useGetMoviesQuery({type: 'FILM', page, query, order: select, minRate, maxRate, minYear, maxYear});

    const options: selectOption[] = [
        {
            text: 'Рейтинг',
            value: 'RATING'
        },
        {
            text: 'Количество голосов',
            value: 'NUM_VOTE'
        },
        {
            text: 'Год выпуска',
            value: 'YEAR'
        },
    ];

    return (
        <div className='container mx-auto px-3 pb-4'>
            <form className='mb-[30px]'>
                <MySearch setPage={setPage} setQuery={setQuery} query={query} />
                <MySelect label='Сортировать' selectedOption='Выберите порядок' options={options} setPage={setPage} setSelect={setSelect}/>
                <div className='flex justify-between'>
                    <MyRange setPage={setPage} setMinRange={setMinRate} setMaxRange={setMaxRate} minRange={minRate} maxRange={maxRate} min={0} max={10} label='Выберите оценку' />
                    <MyRange setPage={setPage} setMinRange={setMinYear} setMaxRange={setMaxYear} minRange={minYear} maxRange={maxYear} min={1000} max={3000} label='Выберите год' />
                </div>
            </form>
            {isLoading && <Loader/>}
            {isError && <ErrorBlock/>}
            {data && data !== undefined && <MoviesList movies={data?.items}/>}
            {!isError && data !== undefined && data &&
                <div className='flex justify-center mx-auto'>
                    <MyButton onClickHandler={() => {window.scrollTo(0, 0); setPage(prev => prev - 1)}} disabled={page === 1 && true}>&#8592;</MyButton>
                    <MyButton onClickHandler={() => {window.scrollTo(0, 0); setPage(prev => prev + 1)}} disabled={data?.items.length < 20 && true}>&#8594;</MyButton>
                </div>
            }
        </div>
    );
};

export default MoviesPage;