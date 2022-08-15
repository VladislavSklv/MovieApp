import React from 'react';
import { Country, Genre } from '../store/store';

export interface selectOption {
    text?: string;
    value?: string;
    id?: number;
    genre?: string;
    country?: string;
}

interface mySelectProps {
    label?: string;
    selectedOption: string;
    options: selectOption[];
    setSelect: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const MySelect: React.FC<mySelectProps> = ({label, options, selectedOption, setPage, setSelect}) => {
    return (
        <>
            <label htmlFor="countries" className="block mt-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            <select 
                defaultValue='selected' 
                id="countries" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 outline-none"
                onChange={(e) => {
                    setSelect(e.target.value);
                    setPage(1);
                }}
            >
                <option value='selected' disabled>{selectedOption}</option>
                {options.map(option => (
                    <option key={option.value || option.id} value={option.value || option.id?.toString()} >{option.text || option.genre || option.country}</option> 
                ))}
            </select>
        </>
    );
};

export default MySelect;