"use client";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all movies on context load
  useEffect(() => {
    async function fetchAllMovies() {
      try {
        setIsLoading(true);

        // Fetch popular movies
        const popularRes = await fetch(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7`
        );
        const popularData = await popularRes.json();

        // Fetch trending movies
        const trendingRes = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=9813ce01a72ca1bd2ae25f091898b1c7`
        );
        const trendingData = await trendingRes.json();

        // Fetch upcoming movies
        const upcomingRes = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=9813ce01a72ca1bd2ae25f091898b1c7`
        );
        const upcomingData = await upcomingRes.json();

        // Set all movies in one array for search and details with no duplicates
        const allMovies = [
          ...popularData.results,
          ...trendingData.results,
          ...upcomingData.results,
        ];

        // Remove duplicates by creating a Map with movie ID as key
        const uniqueMovies = Array.from(
          new Map(allMovies.map((movie) => [movie.id, movie])).values()
        );

        setMovies(uniqueMovies);

        // Set specific categories
        setTrendingMovies(trendingData.results);
        setUpcomingMovies(upcomingData.results);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    return search.length > 0
      ? movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )
      : movies;
  }, [search, movies]);

  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [search]
  );

  return (
    <MoviesContext.Provider
      value={{
        search,
        setSearch,
        movies,
        setMovies,
        trendingMovies,
        upcomingMovies,
        isLoading,
        setIsLoading,
        error,
        setError,
        filteredMovies,
        handleSearch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MoviesContext);
  if (context === undefined)
    throw new Error("useMovies must be used within a MoviesProvider");
  return context;
}

export { MoviesProvider, useMovies };
