import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/backup.png";
import { useTitle } from "../hooks/index";

export const MovieDetail = () => {
  const params = useParams();
  const [data, setdata] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=b0fd8dac960f60c04d57181707a5d558`
      );
      const data = await res.json();
      setdata(data);
    };

    fetchdata();
  }, [params.id]);
  useTitle(data.original_title);
  console.log(data.original_title);

  console.log(params);

  const {
    poster_path,
    original_title,
    genres = [],
    popularity,
    imdb_id,
    release_date,
    budget,
    revenue,
    runtime,
    overview,
    vote_average,
  } = data;

  const url = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : backup;

  return (
    <main>
      <section className="py-10  flex flex-wrap justify-around  ">
        <div className="max-w-sm">
          <img src={url} alt={original_title} className="rounded" />
        </div>
        <div className=" text-gray-800   dark:text-white  max-w-2xl  text-center  md:text-left     mt-2 capitalize">
          <h1 className="font-bold text-3xl">{original_title}</h1>
          <p className="text-md mt-4 text-base/8  text-left"> {overview}</p>
          <p className="flex  md:justify-start flex-wrap gap-2  my-6">
            {genres.map((items) => (
              <span
                key={items.id}
                className="py-2 text-md px-4 text-black dark:text-white border border-gray-600 rounded list-none "
              >
                {items.name}
              </span>
            ))}
          </p>
          <div className="mt-2 text-left ">
            <span className="text-bold">⭐{vote_average}</span> -{popularity}{" "}
            <span>reviews</span>
          </div>
          <p className="mt-6 font-bold text-left ">
            Runtime :{" "}
            <span className="font-semibold text-sm dark:text-gray-300">
              {" "}
              {runtime}{" "}
            </span>
          </p>
          <p className="mt-6 font-bold text-left ">
            Budget :{" "}
            <span className="font-semibold text-sm dark:text-gray-300">
              {" "}
              {budget}{" "}
            </span>
          </p>
          <p className="mt-6 font-bold text-left ">
            Revenue :{" "}
            <span className="font-semibold text-sm dark:text-gray-300">
              {" "}
              {revenue}{" "}
            </span>
          </p>
          <p className="mt-6 font-bold text-left ">
            Release Date :{" "}
            <span className="font-semibold text-sm dark:text-gray-300">
              {" "}
              {release_date}{" "}
            </span>
          </p>
          <p className="mt-6 font-bold text-left ">
            IMDB Code :{" "}
            <a
              href={`https://www.imdb.com/title/${imdb_id}`}
              target="_blank"
              className="font-semibold text-sm dark:text-gray-300"
              rel="noreferrer"
            >
              {imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
