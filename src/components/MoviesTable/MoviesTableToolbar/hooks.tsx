import { action } from "mobx";
import { deleteMovieTableHookUtils } from "./utils";
import { Movies, Selected, SetMovies, SetSelected } from "../types";

export const useGetDeleteMovieTableItem = (
  movies: Movies,
  setMovies: SetMovies,
  selected: Selected,
  setSelected: SetSelected
) => {
  const onDeleteMovieTableItems = action("onDeleteMovieTableItems", () => {
    setMovies(deleteMovieTableHookUtils(selected, movies));
    setSelected([]);
  });

  return {
    onDeleteMovieTableItems,
  };
};
