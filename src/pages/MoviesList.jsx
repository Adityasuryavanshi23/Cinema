/* eslint-disable react/prop-types */
import { Card } from "../components";
import { useFetch, useTitle } from "../hooks/index";

export const MoviesList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="py-16 flex flex-wrap justify-center gap-4 ">
        {movies.length === 0 && (
          <h1 className="text-4xl dark:text-white text-gray-800">
            No Movies Found
          </h1>
        )}
        {movies.map((movies) => (
          <Card key={movies.id} movies={movies} />
        ))}
      </section>
    </main>
  );
};
