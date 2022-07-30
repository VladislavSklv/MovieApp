import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { rootMovies } from './store';

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=1&genres=1&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1',
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<rootMovies, void>({
            query: () => ({
                url: '',
                method: 'GET',
                headers: {
                'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                'Content-Type': 'application/json',
                },
            })
        })
    }),
});

export default moviesApi;
export const { useGetMoviesQuery } = moviesApi;