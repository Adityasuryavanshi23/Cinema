import { Routes, Route } from "react-router-dom";
import { MoviesList, MovieDetail, Search, PageNotFound } from "../pages/index";
export const Allroutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MoviesList apiPath="/movie/now_playing" title="Home" />}
      />
      <Route path="movies/:id" element={<MovieDetail />} />
      <Route
        path="movies/toprated"
        element={<MoviesList apiPath="/movie/top_rated" title="Top Rated" />}
      />
      <Route
        path="movies/upcoming"
        element={<MoviesList apiPath="/movie/upcoming" title="Upcoming" />}
      />
      <Route
        path="movies/popular"
        element={<MoviesList apiPath="/movie/popular" title="Popular" />}
      />
      <Route path="search" element={<Search apiPath="/search/movie" />} />
      <Route path="*" element={<PageNotFound title="Page Not Found" />} />
    </Routes>
  );
};
