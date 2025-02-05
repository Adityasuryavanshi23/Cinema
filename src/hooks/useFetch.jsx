import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryterm) => {
  const [data, setdata] = useState([]);
  const url = `https://api.themoviedb.org/3${apiPath}?api_key=b0fd8dac960f60c04d57181707a5d558&query=${queryterm}`;

  useEffect(() => {
    const fetchmovies = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setdata(json.results);
      console.log(json.results);
    };

    fetchmovies();
  }, [url]);

  return { data };
};
