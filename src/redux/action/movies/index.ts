import type { Movie } from "../../types/movie"
import { ActionType } from "../action-types"

export interface FetchMoviesAction {
    type : typeof ActionType.FETCH_MOVIES
    payload : Movie[]
}

export interface SelectMovieAction {
    type : typeof ActionType.SELECT_MOVIE
    payload : Movie
}

export interface removeSelectMovieAction {
    type : typeof ActionType.REMOVE_SELECTED_MOVIE
    payload? : Movie
}


export const fetchMovies = (movies: Movie[]) : FetchMoviesAction => {
    return {
        type : ActionType.FETCH_MOVIES ,
        payload : movies
    }
}

export const selectMovie = (movie: Movie) : SelectMovieAction => {
    return {
        type : ActionType.SELECT_MOVIE ,
        payload : movie
    }
}

export const removeSelectMovie = () : removeSelectMovieAction => {
    return {
        type : ActionType.REMOVE_SELECTED_MOVIE ,
    }
}

// ✅ Union type for reducer
export type MoviesAction = FetchMoviesAction | SelectMovieAction | removeSelectMovieAction;