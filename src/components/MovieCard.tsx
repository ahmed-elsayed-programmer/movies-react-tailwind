import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
}: MovieCardProps) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="block transform transition-transform hover:scale-105"
    >
      <div className="relative rounded-lg overflow-hidden shadow-lg group">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          loading="lazy"
          className="w-full h-64 object-cover group-hover:opacity-75"
        />
        <div className="absolute bottom-0 bg-black bg-opacity-70 w-full p-2 text-white text-center">
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="text-yellow-400 text-xs">
            ⭐ {vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
