// Home.tsx
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api, api_key } from "../api";
import Movies from "./Movies";
import { fetchMovies } from "../redux/action/movies";
import type { AppDispatch, RootState } from "../redux/store";
import type { Movie } from "../redux/types/movie";

const Home = () => {
  // typed dispatch
  const dispatch = useDispatch<AppDispatch>();

  // Movies state ကို selector နဲ့ access
  const movies = useSelector((state: RootState) => state.movies.movies);

  // API call
  const getMovie = useCallback( async () => {
    try {
      const res = await api.get<{ results: Movie[] }>(
        `/movie/now_playing?api_key=${api_key}`
      );

      // type-safe dispatch
      dispatch(fetchMovies(res.data.results));
    } catch (error) {
      console.error(error);
    }
  },[dispatch]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <>
      {/* fetched movies ကို props နဲ့ pass လုပ် */}
      <Movies movies={movies} />
    </>
  );
};

export default Home;
