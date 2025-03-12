import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { tmdbApi } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton"; // If you have a skeleton loader component

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  genres: { id: number; name: string }[];
  vote_average: number;
}

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovie = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      const response = await tmdbApi.getMovieDetails(Number(id));
      setMovie(response.data);
      setError(null);
    } catch {
      setError("Failed to load movie details.");
      setMovie(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMovie();
    console.log(loading);
    console.log(error);
    console.log(movie);
  }, [fetchMovie]);

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <Skeleton className="h-96 w-full md:w-1/3 rounded-lg" />
        <div className="mt-6 space-y-4">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  if (!movie) {
    return <p className="text-center text-lg font-semibold">No movie found.</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
      <img
        loading="lazy"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "/placeholder.png"
        }
        alt={movie.title}
        className="rounded-lg w-full md:w-1/3 shadow-lg"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">{movie.title}</h2>
        <p className="text-gray-400">
          {movie.release_date || "Unknown Release Date"}
        </p>
        <p>{movie.overview || "No overview available for this movie."}</p>
        <p className="font-semibold text-yellow-400">
          ⭐ {movie.vote_average?.toFixed(1) ?? "N/A"}
        </p>
        <div className="flex flex-wrap gap-2">
          {movie.genres?.length ? (
            movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full"
              >
                {genre.name}
              </span>
            ))
          ) : (
            <span className="text-gray-400">No genres available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
