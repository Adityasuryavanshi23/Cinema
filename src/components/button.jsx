/* eslint-disable react/prop-types */
export const Button = ({ children }) => {
  return (
    <button
      className="py-2 px-4 text-white dark:text-white  font-bold   bg-gray-400 hover:bg-gray-600 dark:bg-blue-800 text-center capitalize rounded-md dark:hover:bg-blue-900 text-xl 
              "
      type="button"
    >
      {children}
    </button>
  );
};
