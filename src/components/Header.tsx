// import { useState } from "react";

import { useCallback, useEffect, useRef } from "react";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { fetchMovies } from "../redux/action/movies";
import type { Movie } from "../redux/types/movie";

const Header = () => {

  // const [ movieName, setMovieName ] = useState<string>('');

  const movieName = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch<AppDispatch>();

  const searchMovie = useCallback( async () => {

    const value = movieName.current?.value

    if(value !== '') {

      try {

          const res = await api.get(`/search/movie?query=${value}&api_key=${api_key}`)

          dispatch(fetchMovies(res.data.results))
          console.log(res.data.results)

          console.log(res.data.results)

        }catch(e) {
          console.log(e);
        }

    }else{
      const res = await api.get<{ results: Movie[] }>(
              `/movie/now_playing?api_key=${api_key}`
            );
      dispatch(fetchMovies(res.data.results))
      console.log(res.data.results)
    }
    
  },[dispatch, movieName]);

  useEffect( () => {
    searchMovie();
  },[searchMovie] )

  return (
    <nav className="bg-white w-screen  border-gray-200">
      <div className="w-screen px-4 py-3 flex items-center justify-around">
        {/* Brand */}
        <span className=" poppins text-xl font-semibold whitespace-nowrap text-gray-950">
          Movie Channel
        </span>

        {/* Right Side */}
        <div className=" flex items-center gap-3 md:order-2">

          <form action="">
            <div className="mt-2">
              <div className=" flex w-80 items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                  id="price"
                  type="text"
                  name="price"
                  // value={movieName}
                  // onChange={ (e) => setMovieName(e.target.value)}
                  ref={movieName}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if(e.key === "Enter") {
                      e.preventDefault();
                      searchMovie();
                    }
                  }}
                  placeholder="Search..."
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Header;
