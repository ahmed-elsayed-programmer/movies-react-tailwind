import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbApi } from "@/lib/api";
import { Movie } from "@/types";

interface MovieState {
  movies: Movie[];
  status: "idle" | "loading" | "failed";
}

const initialState: MovieState = {
  movies: [],
  status: "idle",
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await tmdbApi.getAnimatedMovies();
  return response.data.results;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default movieSlice.reducer;
