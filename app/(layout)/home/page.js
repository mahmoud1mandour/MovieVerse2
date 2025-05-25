"use client";

import { useMovies } from "@/Context/MoviesContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { trendingMovies, upcomingMovies, isLoading } = useMovies();
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    // Set featured movie from trending movies when they're loaded
    if (trendingMovies.length > 0) {
      setFeaturedMovie(trendingMovies[0]);
      setIsPageLoading(false);
    }
  }, [trendingMovies]);

  if (isLoading || isPageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Featured Movie */}
      {featuredMovie && (
        <div className="relative h-[70vh] w-full">
          <div className="absolute inset-0">
            <Image
              src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}`}
              alt={featuredMovie.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>

          <div className="relative h-full flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {featuredMovie.title}
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mb-6">
                {featuredMovie.overview}
              </p>
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">
                  ⭐ {featuredMovie.vote_average.toFixed(1)}
                </span>
                <span className="text-gray-300">
                  {new Date(featuredMovie.release_date).getFullYear()}
                </span>
              </div>
              <Link
                href={`/movies/${featuredMovie.id}`}
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Trending Movies Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Trending This Week
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trendingMovies.slice(0, 6).map((movie) => (
              <Link key={movie.id} href={`/movies/${movie.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative h-64">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1 truncate">
                      {movie.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-500 font-bold">
                        ⭐ {movie.vote_average.toFixed(1)}
                      </span>
                      <span className="text-sm text-gray-600">
                        {new Date(movie.release_date).getFullYear()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Movies Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingMovies.slice(0, 4).map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${
                      movie.backdrop_path || movie.poster_path
                    }`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    UPCOMING
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Release: {new Date(movie.release_date).toLocaleDateString()}
                  </p>
                  <Link
                    href={`/movies/${movie.id}`}
                    className="text-purple-600 hover:text-purple-800 font-medium text-sm"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover More Movies
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our complete collection of movies and find your next
            favorite film.
          </p>
          <Link
            href="/movies"
            className="inline-block bg-white text-purple-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Browse All Movies
          </Link>
        </div>
      </section>
    </div>
  );
}
