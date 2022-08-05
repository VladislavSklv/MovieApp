import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { rootMovies } from './store';

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<rootMovies, { type: string, page: number }>({
            query: ({type = 'FILM', page = 1}) => ({
                url: '',
                method: 'GET',
                headers: {
                'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                'Content-Type': 'application/json',
                },
                params: {
                    type: type,
                    order: 'NUM_VOTE',
                    ratingFrom: 0,
                    ratingTo: 10,
                    yearFrom: 1000,
                    yearTo: 3000,
                    page: page,
                    country: 1,
                    genre: 1,
                    keyword: '',
                }
            })
        })
    }),
});

export default moviesApi;
export const { useGetMoviesQuery } = moviesApi;