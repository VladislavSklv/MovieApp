import { useEffect } from "react";
import { IMovie, rootMovies} from "../store/store";

const useFilms = (data: rootMovies | undefined, array: IMovie[], dispatch: any, addFilms: any) => {
    useEffect(() => {
        if(data?.items && data?.items.length > 0){
            let arr: IMovie[] = [];
            data.items.forEach(card => {
                let check = 1;
                array.forEach((movie: IMovie) => {
                    if(card.kinopoiskId === movie.kinopoiskId){
                        check = 0;
                    }
                })
                if(check !== 0) arr.push(card);
            })
            dispatch(addFilms(arr));
        }
    }, [data]);
}

export default useFilms;