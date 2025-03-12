import axios from "axios";
import queryString from "query-string";

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: import.meta.env.VITE_API_TOKEN,
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + apiConfig.apiKey,
  },
  paramsSerializer: (params: Record<string, unknown>) =>
    queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (response) => response.data ?? response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export const category = {
  movie: "movie",
  tv: "tv",
} as const;

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
} as const;

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
} as const;

export const tmdbApi = {
  getAnimatedMovies: async (params = {}) => {
    return axiosClient.get("discover/movie", {
      params: { ...params, with_genres: 16 }, // 16 = Animation
    });
  },
  getMovieList: (type: keyof typeof movieType, params?: object) =>
    axiosClient.get(`movie/${movieType[type]}`, { params }),

  searchMovies: (query: string) =>
    axiosClient.get("search/movie", { params: { query } }),

  getMovieDetails: (id: number) => axiosClient.get(`movie/${id}`),

  getPopularMovies: () => axiosClient.get("movie/popular"),

  getTopRatedMovies: () => axiosClient.get("movie/top_rated"),
};

export default tmdbApi;
