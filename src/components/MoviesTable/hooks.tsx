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

export function useGetOnRowsPerPageChange() {
  const { setPage, setRowsPerPage } = useMovieTableContext();

  const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (+event.target.value) {
      case 5:
        setRowsPerPage(5);
        break;
      case 10:
        setRowsPerPage(10);
        break;
      case 25:
        setRowsPerPage(25);
        break;
    }

    setPage(0);
  };
  return {
    onRowsPerPageChange,
  };
}

export function useGetOnPageChange() {
  const { setPage } = useMovieTableContext();

  const onPageChange = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  return {
    onPageChange,
  };
}
