import { runInAction } from "mobx";
import { useMovieTableContext } from "../../MoviesList/hooks/useMovieTableContext";
import { IMovieTableItem } from "../types";

export const useGetDeleteMovieTableItem = () => {
  const { movies, setMovieTableItem, selected, setSelected } =
    useMovieTableContext();

  const deleteMovieTableItems = () => {
    const idArray = [...selected];
    while (idArray.length) {
      const id = idArray.shift();
      runInAction(() => {
        setMovieTableItem(
          movies.filter((movie: IMovieTableItem) => movie.id !== id)
        );
      });
    }
    runInAction(() => setSelected([]));
  };

  return {
    deleteMovieTableItems,
  };
};
