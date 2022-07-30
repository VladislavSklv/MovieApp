import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "./store";

export const moviesSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
    },
    reducers: {
        addFilms(state: any, action: {type: string, payload: IMovie[]}) {
            action.payload.forEach(film => {
                state.movies.push(film);
            });
        }
    }
})

export default moviesSlice;
export const {addFilms} = moviesSlice.actions;