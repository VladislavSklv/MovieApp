import React, { useState } from 'react';
import ErrorBlock from '../components/ErrorBlock';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import { useGetMoviesQuery } from '../store/moviesReducer';
import MyButton from '../UI/MyButton';
import MySearch from '../UI/MySearch';
import MySelect, { selectOption } from '../UI/MySelect';

const MoviesPage:React.FC = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [select, setSelect] = useState('NUM_VOTE');
    const {isError, isLoading, data} = useGetMoviesQuery({type: 'FILM', page, query, order: select});

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
            <div>
                <MySearch setPage={setPage} setQuery={setQuery} query={query} />
                <MySelect label='Сортировать' selectedOption='Выберите порядок' options={options} setPage={setPage} setSelect={setSelect}/>
            </div>
            {data && data !== undefined && <MoviesList movies={data?.items}/>}
            {isLoading && <Loader/>}
            {isError && <ErrorBlock/>}
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