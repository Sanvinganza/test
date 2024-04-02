import { IMovie, Order, OrderBy } from "../types";
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

export const useGetOnSelectAllClick = () => {
  const { movies, setSelected } = useMovieTableContext();

  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(movies.map((n) => n.id));
      return;
    }

    setSelected([]);
  };

  return {
    onSelectAllClick,
  };
};
