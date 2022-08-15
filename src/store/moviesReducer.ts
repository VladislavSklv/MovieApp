import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovieById, RootComments, RootFacts, RootGentresAndCountries, rootMovies, RootShots, RootSimilars, RootTrailer } from './store';

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

interface getMovieByIdProps {
    kinopoiskId: string | undefined;
}

interface getReviewsByIdProps {
    kinopoiskId: string | undefined;
    page: number;
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
        }),
        getMovieById: builder.query<MovieById, getMovieByIdProps>({
            query: ({kinopoiskId}) => ({
                url: `/${kinopoiskId}`,
                method: 'GET',
                headers: {
                    'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                    'Content-Type': 'application/json',
                },
            })
        }),
        getTrailerById: builder.query<RootTrailer, getMovieByIdProps>({
            query: ({kinopoiskId}) => ({
                url: `/${kinopoiskId}/videos`,
                method: 'GET',
                headers: {
                    'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                    'Content-Type': 'application/json',
                },
            })
        }),
        getShotsById: builder.query<RootShots, getMovieByIdProps>({
            query: ({kinopoiskId}) => ({
                url: `/${kinopoiskId}/images`,
                method: 'GET',
                headers: {
                    'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                    'Content-Type': 'application/json',
                },
                params: {
                    id: kinopoiskId,
                    type: 'STILL',
                    page: 1,
                }
            })
        }),
        getSimilarsById: builder.query<RootSimilars, getMovieByIdProps>({
            query: ({kinopoiskId}) => ({
                url: `/${kinopoiskId}/similars`,
                method: 'GET',
                headers: {
                    'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                    'Content-Type': 'application/json',
                }
            })
        }),
        getReviewsById: builder.query<RootComments, getReviewsByIdProps>({
            query: ({kinopoiskId, page}) => ({
                url: `/${kinopoiskId}/reviews`,
                method: 'GET',
                headers: {
                    'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                    'Content-Type': 'application/json',
                },
                params:{
                    id: kinopoiskId,
                    page: page,
                    order: 'DATE_DESC',
                }
            })
        }),
        getFactsById: builder.query<RootFacts, getMovieByIdProps>({
            query: ({kinopoiskId}) => ({
                url: `/${kinopoiskId}/facts`,
                method: 'GET',
                headers: {
                    'X-API-KEY': 'e90cfcea-db6a-4efc-8436-577ca4a173d0',
                    'Content-Type': 'application/json',
                }
            })
        }),
    }),
});

export default moviesApi;
export const { useLazyGetMoviesQuery, useLazyGetGenresAndCountriesQuery, useGetMovieByIdQuery, useGetTrailerByIdQuery, useGetShotsByIdQuery, useGetSimilarsByIdQuery, useGetReviewsByIdQuery, useGetFactsByIdQuery } = moviesApi;