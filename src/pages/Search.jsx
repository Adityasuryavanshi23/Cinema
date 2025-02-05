/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useTitle, useFetch } from "../hooks/index";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryterm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryterm);

  useTitle(`Result For "${queryterm}"`);
  return (
    <main>
      <section className="py-10 text-3xl text-gray-950 dark:text-white capitalize">
        <p>
          {movies.length === 0
            ? `no result found for "${queryterm}"`
            : `results for "${queryterm}"`}
        </p>
      </section>
      <section className="py-7 flex flex-wrap justify-center gap-4 ">
        {movies.map((movies) => (
          <Card key={movies.id} movies={movies} />
        ))}
      </section>
    </main>
  );
};
