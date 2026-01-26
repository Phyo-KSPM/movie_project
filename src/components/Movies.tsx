// Movies.tsx
import type { Movie } from "../redux/types/movie";
import MovieCard from "./MovieCard";

interface MoviesProps {
  movies: Movie[];
}

const Movies = ({ movies }: MoviesProps) => {

  return (
    <>
      <MovieCard movies={movies}/>
    </>
  );
};

export default Movies;
