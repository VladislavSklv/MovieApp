import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootGentresAndCountries, rootMovies } from './store';

interface getMoviesProps {
    type: string; 
    page: number;
    query: string; 
    order: string;
    minRate: number;
    maxRate: number;
    minYear: number;
    maxYear: number;
    genre?: string;
    country?: string;
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<rootMovies, getMoviesProps>({
            query: ({type = 'FILM', page = 1, query = '', order = 'NUM_VOTE', minRate = 0, maxRate = 10, minYear = 1000, maxYear = 3000, genre, country}) => ({
                url: '',
                method: 'GET',
                headers: {
                'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                'Content-Type': 'application/json',
                },
                params: {
                    type: type,
                    order: order,
                    ratingFrom: minRate,
                    ratingTo: maxRate,
                    yearFrom: minYear,
                    yearTo: maxYear,
                    page: page,
                    genres: genre,
                    countries: country,
                    keyword: query,
                }
            })
        }),
        getGenresAndCountries: builder.query<RootGentresAndCountries, void>({
            query: () => ({
                url: '/filters',
                method: 'GET',
                headers: {
                    'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                    'Content-Type': 'application/json',
                }
            })
        })
    }),
});

export default moviesApi;
export const { useGetMoviesQuery, useLazyGetMoviesQuery, useLazyGetGenresAndCountriesQuery } = moviesApi;