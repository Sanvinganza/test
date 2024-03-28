import { action } from "mobx";
import { useMovieTableContext } from "../hooks/useMovieTableContext";
import { deleteMovieTableHookUtils } from "./utils";

export const useGetDeleteMovieTableItem = () => {
  const { movies, setMovie, selected, setSelected } = useMovieTableContext();

  const onDeleteMovieTableItems = action("onDeleteMovieTableItems", () => {
    setMovie(deleteMovieTableHookUtils(selected, movies));
    setSelected([]);
  });

  return {
    onDeleteMovieTableItems,
  };
};
