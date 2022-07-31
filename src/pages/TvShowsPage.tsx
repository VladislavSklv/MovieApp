import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MoviesList from '../components/MoviesList';
import { useAppSelector } from '../hooks/redux';
import { addTvShows } from '../store/movieSlice';
import { useGetMoviesQuery } from '../store/moviesReducer';

const TvShowsPage = () => {
    const {isError, isLoading, data} = useGetMoviesQuery({type: 'TV_SHOW'});
    const {tvShows} = useAppSelector((state) => state.movie);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(data?.items && data?.items.length > 0){
            dispatch(addTvShows(data.items));
        }
    }, [data]);

    return (
        <div className='container mx-auto px-3'>
            {tvShows && <MoviesList movies={tvShows}/>}
        </div>
    );
};

export default TvShowsPage;