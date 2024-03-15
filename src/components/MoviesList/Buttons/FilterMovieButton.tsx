import { useRef } from "react";
import { IField, useFilterByField } from "../hooks/useFilterByField";
import { useMovieListContext } from "../hooks/useMovieListContext";

export const FilterMovieButton = () => {
  const { movies, setMovies } = useMovieListContext();

  const field = useRef<IField>("id");

  const handleOnClick = () => {
    useFilterByField(field.current, movies, setMovies);

    if (field.current === "id") {
      field.current = "discribe";
    } else if (field.current === "discribe") {
      field.current = "title";
    } else if (field.current === "title") field.current = "id";
  };

  return (
    <button data-testid="button-filter-id" onClick={handleOnClick}>
      Filter Movies
    </button>
  );
};
