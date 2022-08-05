import { createSlice, Slice } from "@reduxjs/toolkit";
import { IMovie } from "./store";

export const moviesSlice: Slice<{
        movies: IMovie[] | any;
        series: IMovie[] | any;
        tvShows: IMovie[] | any;
    }, {
        addFilms(state: any, action: {
            type: string;
            payload: IMovie[];
        }): void;
        addSeries(state: any, action: {
            type: string;
            payload: IMovie[];
        }): void;
        addTvShows(state: any, action: {
            type: string;
            payload: IMovie[];
        }): void;
    }, "movie"> = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
        series: [],
        tvShows: [],
    },
    reducers: {
        addFilms(state: any, action: {type: string, payload: IMovie[]}) {
            action.payload.forEach(film => {
                state.movies.push(film);
            });
        },
        addSeries(state: any, action: {type: string, payload: IMovie[]}){
            action.payload.forEach(film => {
                state.series.push(film);
            });
        },
        addTvShows(state: any, action: {type: string, payload: IMovie[]}){
            action.payload.forEach(film => {
                state.tvShows.push(film);
            });
        },
    }
})

export default moviesSlice;
export const {addFilms, addSeries, addTvShows} = moviesSlice.actions;