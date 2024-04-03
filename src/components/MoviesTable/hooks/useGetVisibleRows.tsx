import { Movies, Order, OrderBy, Page, RowsPerPage } from "../types";
import { stableSort } from "../utils";

export function useGetVisibleRows(
  movies: Movies,
  order: Order,
  orderBy: OrderBy,
  page: Page,
  rowsPerPage: RowsPerPage
) {
  return {
    visibleRows: stableSort(movies, order, orderBy).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    ),
  };
}
