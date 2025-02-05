import { Link } from "react-router-dom";
import notfound from "../../public/pagenotfound.png";
import { Button } from "../components/button";
import { useTitle } from "../hooks/useTitle";

// eslint-disable-next-line react/prop-types
export const PageNotFound = ({ title }) => {
  useTitle(title);
  return (
    <main>
      <section>
        <div className="border-b dark:border-gray-600 text-center  dark:text-white py-10">
          <h1 className="text-4xl capitalize">OOPS! page not found 🤦‍♀️</h1>
        </div>
      </section>
      <section className="text-center">
        <Link to={"/"}>
          <Button>go to cinemate</Button>
        </Link>
        <img
          className="m-auto mt-10 w-[450px]"
          src={notfound}
          alt="pagenotfound"
        />
      </section>
    </main>
  );
};
