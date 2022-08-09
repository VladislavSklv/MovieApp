import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movieSlice";
import moviesApi from "./moviesReducer";

interface ICountry {
    country: string;
}

interface IGenre {
    genre: string;
}

export interface Genre {
    id: number;
    genre: string;
}

export interface Country {
    id: number;
    country: string;
}

export interface RootGentresAndCountries {
    genres: Genre[];
    countries: Country[];
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

const rootReducer = combineReducers({
    [moviesApi.reducerPath]: moviesApi.reducer, 
    [moviesSlice.name]: moviesSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof configureStore>;
export type TAppDispatch = TAppStore['dispatch'];