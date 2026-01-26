import { useNavigate, useParams } from "react-router";
import { api, api_key } from "../api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectMovie, selectMovie } from "../redux/action/movies";
import type { RootState, AppDispatch } from "../redux/store";

const Details = () => {
  const { movieID } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const nevigate = useNavigate();

  const movie = useSelector((state: RootState) => state.movies.movie);

  // ✅ Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieDetail = async () => {
      try {
        setLoading(true); // start loading
        const res = await api.get(`/movie/${movieID}?api_key=${api_key}`);
        dispatch(selectMovie(res.data));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false); // stop loading
      }
    };

    if(movieID) {
      movieDetail();
    }

    return () => {
      dispatch(removeSelectMovie());
    };
    
  }, [movieID, dispatch]);

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" border rounded-4xl border-gray-100">
      <div className="max-w-5xl mx-auto relative">

        {/* Back Button */}
        <button
          onClick={() => nevigate(-1)}
          className="absolute top-4 left-4 bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-full shadow-md flex items-center gap-2 z-10 transition"
        >
          <i className="fa-solid fa-angle-left"></i>
          Back
        </button>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-yellow-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          /* Movie Card */
          <div className="md:flex bg-gray-100 rounded-3xl overflow-hidden shadow-lg group">

            {/* Poster */}
            <div className="md:w-1/3 w-full relative overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Details */}
            <div className="md:w-2/3 w-full p-8 flex flex-col justify-between text-gray-900">
              <div>
                <h2 className="text-3xl font-bold mb-4">{movie?.title}</h2>
                <p className="text-gray-700 text-sm md:text-base mb-6 line-clamp-6">
                  {movie?.overview}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                {/* Rating */}
                <div className="flex items-center bg-yellow-500 py-2 px-4 rounded-full font-semibold shadow-md hover:scale-105 transition-transform">
                  <i className="fa-solid fa-star mr-2 text-white"></i>
                  <span className="text-white">{movie?.vote_average.toFixed(1)}</span>
                </div>

                {/* Release Date */}
                <div className="flex items-center bg-gray-300 py-2 px-4 rounded-full font-medium shadow-md hover:scale-105 transition-transform">
                  <i className="fa-regular fa-calendar-days mr-2 text-gray-900"></i>
                  {movie?.release_date}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
    </div>
  );
};

export default Details;
