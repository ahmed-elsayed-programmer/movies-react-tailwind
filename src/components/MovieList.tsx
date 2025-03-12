import { Movie } from "@/types";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
