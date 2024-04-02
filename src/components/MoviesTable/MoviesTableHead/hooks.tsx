import { IMovie, Order, OrderBy, Selected } from "../types";
import { useMovieTableContext } from "../hooks/useMovieTableContext";

export const useGetOnSortHandle = (
  order: Order,
  orderBy: OrderBy,
  setOrder: (order: Order) => void,
  setOrderBy: (orderBy: OrderBy) => void
) => {
  const onSortHandle = (
    _: React.MouseEvent<unknown>,
    property: keyof IMovie
  ) => {
    setOrder(orderBy === property && order === "asc" ? "desc" : "asc");
    setOrderBy(property);
  };

  return {
    onSortHandle,
  };
};

export const useGetOnSelectAllClick = (
  setSelected: (selected: Selected) => void,
  movies: IMovie[]
) => {
  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(movies.map((movie) => movie.id));
      return;
    }

    setSelected([]);
  };

  return {
    onSelectAllClick,
  };
};
