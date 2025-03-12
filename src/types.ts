export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

export interface MovieDetail extends Movie {
  genres: { id: number; name: string }[];
}
