import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movieSlice";
import moviesApi from "./moviesReducer";

interface ICountry {
    country: string;
}

interface IGenre {
    genre: string;
}

export interface MovieById {
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn?: any;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string;
    logoUrl: string;
    reviewsCount: number;
    ratingGoodReview: number;
    ratingGoodReviewVoteCount: number;
    ratingKinopoisk: number;
    ratingKinopoiskVoteCount: number;
    ratingImdb: number;
    ratingImdbVoteCount: number;
    ratingFilmCritics: number;
    ratingFilmCriticsVoteCount: number;
    ratingAwait: number;
    ratingAwaitCount: number;
    ratingRfCritics: number;
    ratingRfCriticsVoteCount: number;
    webUrl: string;
    year: number;
    filmLength: number;
    slogan: string;
    description: string;
    shortDescription: string;
    editorAnnotation?: any;
    isTicketsAvailable: boolean;
    productionStatus?: any;
    type: string;
    ratingMpaa: string;
    ratingAgeLimits: string;
    countries: ICountry[];
    genres: IGenre[];
    startYear?: any;
    endYear?: any;
    serial: boolean;
    shortFilm: boolean;
    completed: boolean;
    hasImax: boolean;
    has3D: boolean;
    lastSync: Date;
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

export interface ITrailer {
    url: string;
    name: string;
    site: string;
}

export interface RootTrailer {
    total: number;
    items: ITrailer[];
}

export interface IShot {
    imageUrl: string;
    previewUrl: string;
}

export interface RootShots {
    total: number;
    totalPages: number;
    items: IShot[];
}

export interface ISimilar {
    filmId: number;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;
    relationType: string;
}

export interface RootSimilars {
    total: number;
    items: ISimilar[];
}

export interface IComment {
    kinopoiskId: number;
    type: string;
    date: Date;
    positiveRating: number;
    negativeRating: number;
    author: string;
    title?: any;
    description: string;
}

export interface RootComments {
    total: number;
    totalPages: number;
    totalPositiveReviews: number;
    totalNegativeReviews: number;
    totalNeutralReviews: number;
    items: IComment[];
}

export interface RootFacts {
    total: number;
    items: IFact[];
}
  
export interface IFact {
    text: string;
    type: string;
    spoiler: boolean;
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