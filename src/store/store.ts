import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movieSlice";
import moviesApi from "./moviesReducer";

interface ICountry {
    country: string;
}

interface IGenre {
    genre: string;
}

export interface IMovie {
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn?: any;
    nameOriginal: string;
    countries: ICountry[];
    genres: IGenre[];
    ratingKinopoisk: number;
    ratingImdb: number;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
}

export interface rootMovies {
    total: number;
    totalPages: number;
    items: IMovie[];
}

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer, 
        [moviesSlice.name]: moviesSlice.reducer,
    },
});