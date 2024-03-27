import { stableSort } from "../utils";
import { useMovieTableContext } from "./useMovieTableContext";

export function useGetVisibleRows() {
  const { movies, order, orderBy, page, rowsPerPage } = useMovieTableContext();
  return {
    visibleRows: stableSort(movies, order, orderBy).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    ),
  };
}
