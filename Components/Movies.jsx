"use client";

import { useMovies } from "@/Context/MoviesContext";
import Movie from "./Movie";
import Loader from "./Loader";
import Search from "./Search";

function Movies() {
  const { isLoading, filteredMovies, error, search } = useMovies();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Movie List</h2>

        <div className="max-w-md mx-auto mb-8">
          <Search />
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <p className="text-red-500">Error fetching data.</p>
          ) : filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))
          ) : (
            <p className="text-gray-500 text-center">No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Movies;
