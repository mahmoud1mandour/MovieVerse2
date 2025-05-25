import { useMovies } from "@/Context/MoviesContext";
import Loader from "./Loader";
import { useRouter } from "next/navigation";

function MovieDetailsComponent({ movieIds }) {
  const { movies } = useMovies();
  const router = useRouter();

  const movieId = Array.isArray(movieIds) ? movieIds[0] : movieIds;

  const movie = movies.find((movie) => movie.id.toString() === movieId);

  if (!movie) return <Loader />;

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    overview,
    release_date,
  } = movie;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="bg-gradient-to-r from-indigo-800 to-purple-800 py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition cursor-pointer"
          >
            <svg
              className="w-5 h-5 text-white "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <h1 className="text-3xl md:text-4xl font-bold text-white text-center w-full">
            {title}
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 lg:w-1/4 bg-black/30">
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8 md:w-2/3 lg:w-3/4">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-gray-200 leading-relaxed">
                  {overview || "No overview available."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 text-purple-400">
                    Release Date
                  </h3>
                  <p className="text-gray-300">{release_date || "N/A"}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 text-purple-400">Rating</h3>
                  <p className="text-gray-300">
                    ⭐ {vote_average.toFixed(1)} ({vote_count} votes)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MovieDetailsComponent;
