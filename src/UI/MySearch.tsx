import React from 'react';

interface mySearchProps {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const MySearch: React.FC<mySearchProps> = ({query, setQuery, setPage}) => {
    return (
        <input
            name='search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none'
            type="text" 
            placeholder='Введите название'
            value={query}
            onChange={e => {
                setQuery(e.target.value);
                setPage(1);
            }}
        /> 
    );
};

export default MySearch;