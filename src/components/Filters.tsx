import React, { useEffect } from 'react';
import { useLazyGetGenresAndCountriesQuery, useLazyGetMoviesQuery } from '../store/moviesReducer';
import MyButton from '../UI/MyButton';
import MyRange from '../UI/MyRange';
import MySearch from '../UI/MySearch';
import MySelect, { selectOption } from '../UI/MySelect';

interface filtersProps {
    minRate: number;
    maxRate: number;
    setMinRate: React.Dispatch<React.SetStateAction<number>>;
    setMaxRate: React.Dispatch<React.SetStateAction<number>>;
    minYear: number;
    maxYear: number;
    setMinYear: React.Dispatch<React.SetStateAction<number>>;
    setMaxYear: React.Dispatch<React.SetStateAction<number>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    query: string;
    setSelect: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setGenre: React.Dispatch<React.SetStateAction<string>>;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    onClickHandler: () => void;
}

const Filters: React.FC<filtersProps> = ({onClickHandler, maxRate, minRate, setMaxRate, setMinRate, setPage, maxYear, minYear, setMaxYear, setMinYear, setQuery, setSelect, setGenre, setCountry, query}) => {
    const [fetchFilters, {isError: isFiltersError, isLoading: isFiltersLoading, data: filters}] = useLazyGetGenresAndCountriesQuery();

    useEffect(() => {
        fetchFilters();
    }, []);

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
        <form className='mb-[30px]'>
            <MySearch setPage={setPage} setQuery={setQuery} query={query} />
            <MySelect label='Сортировать' selectedOption='Выберите порядок' options={options} setPage={setPage} setSelect={setSelect}/>
            {filters != undefined && <MySelect label='Сортировать' selectedOption='Выберите жанр' options={filters?.genres} setPage={setPage} setSelect={setGenre} />}
            {filters != undefined && <MySelect label='Сортировать' selectedOption='Выберите страну' options={filters?.countries} setPage={setPage} setSelect={setCountry} />}
            <div className='flex justify-between flex-wrap'>
                <MyRange setPage={setPage} setMinRange={setMinRate} setMaxRange={setMaxRate} minRange={minRate} maxRange={maxRate} min={0} max={10} label='Выберите оценку' />
                <MyRange setPage={setPage} setMinRange={setMinYear} setMaxRange={setMaxYear} minRange={minYear} maxRange={maxYear} min={1000} max={3000} label='Выберите год' />
            </div>
            <MyButton 
                onClickHandler={onClickHandler} 
                className='inline-block border-black border-2 rounded uppercase text-sm transition-all px-[10px] py-[5px] text-[16px]'
                type='button'
            >Fetch</MyButton>
        </form>
    );
};

export default Filters;