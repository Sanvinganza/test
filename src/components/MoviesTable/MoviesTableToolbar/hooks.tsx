import { action } from "mobx";
import { deleteMovieTableHookUtils } from "./utils";
import { IMovie } from "../types";

export const useGetDeleteMovieTableItem = (
  movies: IMovie[],
  setMovies: (movies: IMovie[]) => void,
  selected: number[],
  setSelected: (selected: number[]) => void
) => {
  const onDeleteMovieTableItems = action("onDeleteMovieTableItems", () => {
    setMovies(deleteMovieTableHookUtils(selected, movies));
    setSelected([]);
  });

  return {
    onDeleteMovieTableItems,
  };
};
