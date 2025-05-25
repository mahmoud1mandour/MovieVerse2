"use client";
import MovieDetailsComponent from "@/Components/MovieDetailsComponent";
import Movies from "@/Components/Movies";
import NotFound from "@/app/not-found";
import { useParams } from "next/navigation";
import React from "react";

function MovieDetails() {
  const { movieIds = [] } = useParams();
  console.log(movieIds);
  if (movieIds.length === 0)
    return (
      <div>
        <Movies />
      </div>
    );
  else if (movieIds.length === 1)
    return (
      <div>
        <MovieDetailsComponent movieIds={movieIds} />
      </div>
    );
  else return <NotFound />;
}

export default MovieDetails;
