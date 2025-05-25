"use client";
import { useMovies } from "../Context/MoviesContext";
import { useRouter } from "next/navigation";

function Search() {
  const { search, handleSearch } = useMovies();
  const router = useRouter();

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push("/movies");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative w-full group">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search movies..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                   bg-white text-gray-800 placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                   transition-all duration-300"
        />
        <button
          type="submit"
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 
                    text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-md
                    transition-all duration-300 ${
                      !search ? "opacity-50" : "opacity-100"
                    }`}
          disabled={!search}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default Search;
