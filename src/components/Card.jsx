/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
import backup from "../assets/backup.png";
export const Card = ({ movies }) => {
  const { original_title, id, overview, poster_path } = movies;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : backup;
  return (
    <div>
      <div className="max-w-[300px] bg-white flex flex-col h-[100%] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/movies/${id}`}>
          <img className="rounded-lg p-3" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/movies/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {original_title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};
