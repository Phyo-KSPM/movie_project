import { Link } from "react-router-dom";
// Movies.tsx
import type { Movie } from "../redux/types/movie";

interface MoviesProps {
  movies: Movie[];
}

const MovieCard = ({ movies }: MoviesProps) => {
  const card: string =
    " bg-white rounded-lg shadow-md overflow-hidden transform-gpu transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl";

  return (
    <>
      <div className="h-screen w-[100vh] mx-auto mt-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movies/details/${movie.id}`}>
              <div className="max-w-sm">
                <div className={card}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-100 object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                      {movie.title}
                    </h2>
                    <p className="text-gray-700 text-sm line-clamp-2">
                      {movie.overview}
                    </p>

                    <div className=" mt-3 flex justify-items-start gap-2 ">

                      <div className=" bg-gray-900 py-2 px-3 rounded-xl">
                        <i className="fa-solid fa-star mr-2 text-white"></i>
                        <span className=" text-white">
                          {movie.vote_average.toFixed(1)}
                        </span>
                      </div>

                      <div className=" bg-gray-900 py-2 px-3 rounded-xl ">
                        <i className="fa-regular fa-calendar-days mx-2 text-white"></i>
                        <span className=" text-white">
                          {movie.release_date}
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
