import { ActionType } from "../../action/action-types";
import type { MoviesAction } from "../../action/movies";
import type { Movie } from "../../types/movie";

interface MoviesState {
  movies: Movie[];
  movie?: Movie;
}

const initialState: MoviesState = {
  movies: [],
  movie: undefined,
};

export const movieReducer = (
  state: MoviesState = initialState,
  action: MoviesAction,
): MoviesState => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.FETCH_MOVIES:
      return { ...state, movies: payload };

    case ActionType.SELECT_MOVIE:
      return { ...state, movie: payload };

    default:
      return state;
  }
};
