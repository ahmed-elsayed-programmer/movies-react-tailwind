import { Input } from "@/components/ui/input";
import { useState } from "react";
import { tmdbApi } from "@/lib/api";
import { Button } from "./ui/button";

const SearchBar = ({ onResults }: { onResults: (results: any) => void }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await tmdbApi.searchMovies(query);
    console.log(response);

    onResults(response.results);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <Input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch} variant={"destructive"}>
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
