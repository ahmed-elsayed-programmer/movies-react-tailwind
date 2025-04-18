import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks"; // ✅ Import typed hooks
import { fetchMovies } from "../store/movieSlice";
import { Movie } from "@/types";
const Home = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const dispatch = useAppDispatch(); // ✅ Use typed dispatch
  const { movies, status } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === "loading") {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  const handleSearchResults = (results: Movie[]) => {
    setSearchResults(results);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Movie Explorer 🎬</h1>
      <SearchBar onResults={handleSearchResults} />
      {searchResults.length > 0 ? (
        <MovieList movies={searchResults} />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Home;
