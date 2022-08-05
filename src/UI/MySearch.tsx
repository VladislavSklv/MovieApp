import React from 'react';

interface mySearchProps {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const MySearch: React.FC<mySearchProps> = ({query, setQuery}) => {
    return (
        <form>
           <input
                className='border-[1px] outline-none border-black/20 text-[14px] leading-1 rounded appearance-none shadow-md px-[4px] py-[4px] w-[320px]'
                type="text" 
                placeholder='Введите название'
                value={query}
                onChange={e => setQuery(e.target.value)}
            /> 
        </form>
    );
};

export default MySearch;