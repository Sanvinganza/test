import { useMovieTableContext } from "./useMovieTableContext";

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
