import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = ` CineMate | ${title} `;
  });

  return null;
};
