import { stableSort } from "../utils";

export function useGetVisibleRows(movies, order, orderBy, page, rowsPerPage) {
  return {
    visibleRows: stableSort(movies, order, orderBy).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    ),
  };
}
