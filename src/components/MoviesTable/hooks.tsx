import { useMovieTableContext } from "../MoviesList/hooks/useMovieTableContext";
import { getComparator, stableSort } from "./utils";

export function useGetVisibleRows() {
  const { movies, order, orderBy, page, rowsPerPage } = useMovieTableContext();

  return {
    visibleRows: stableSort(movies, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    ),
  };
}
