import { runInAction } from "mobx";
import { useMovieTableContext } from "../../MoviesList/hooks/useMovieTableContext";
import { IMovieTableItem } from "../types";

export const useGetOnSortHandle = () => {
  const { order, orderBy, setOrder, setOrderBy } = useMovieTableContext();
  const onSortHandle = (
    _: React.MouseEvent<unknown>,
    property: keyof IMovieTableItem
  ) => {
    runInAction(() => {
      setOrder(orderBy === property && order === "asc" ? "desc" : "asc");
      setOrderBy(property);
    });
  };

  return {
    onSortHandle,
  };
};

export const useGetOnSelectAllClick = () => {
  const { movies, setSelected } = useMovieTableContext();

  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = movies.map((n) => n.id);
      runInAction(() => {
        setSelected(newSelected);
      });
      return;
    }
    runInAction(() => {
      setSelected([]);
    });
  };
  return {
    onSelectAllClick,
  };
};
