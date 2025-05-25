import Image from "next/image";
import Link from "next/link";

function Movie({ movie }) {
  const { title, release_date, vote_average, vote_count, poster_path, id } =
    movie;

  return (
    <Link href={`/movies/${id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-[250px] transition-transform duration-300 hover:scale-105 cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="w-full object-cover"
          width={200}
          height={300}
        ></Image>
        <div className="p-4">
          <p className="text-lg font-semibold mb-1">{title}</p>
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium">Release Date:</span> {release_date}
          </p>
          <div className="flex justify-between text-sm">
            <p>
              <span className="font-medium">⭐ Avg:</span> {vote_average}
            </p>
            <p>
              <span className="font-medium">Votes:</span> {vote_count}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
