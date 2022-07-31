import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MoviesList from '../components/MoviesList';
import { useAppSelector } from '../hooks/redux';
import { addSeries } from '../store/movieSlice';
import { useGetMoviesQuery } from '../store/moviesReducer';

const SeriesPage:React.FC = () => {
    const {isError, isLoading, data} = useGetMoviesQuery({type: 'TV_SERIES'});
    const {series} = useAppSelector((state) => state.movie);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(data?.items && data?.items.length > 0){
            dispatch(addSeries(data.items));
        }
    }, [data]);

    return (
        <div className='container mx-auto px-3'>
            {series && <MoviesList movies={series}/>}
        </div>
    );
};

export default SeriesPage;