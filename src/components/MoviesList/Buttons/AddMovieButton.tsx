import { useRef } from "react";
import { useMovieListContext } from "../hooks/useMovieListContext";

export const AddMovieButton = () => {
  const { movies, setMovies } = useMovieListContext();
  const newId = useRef<number>(6);
  const handleOnClick = () => {
    setMovies([
      ...movies,
      {
        id: newId.current++,
        discribe: "Lorem impsom foues",
        title: "Harry",
      },
    ]);
  };

  return (
    <button data-testid="button-change-id" onClick={handleOnClick}>
      add Movie "Harry"
    </button>
  );
};
