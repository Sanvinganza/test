import { SetPage, SetRowsPerPage } from "../types";

export function useGetOnRowsPerPageChange(
  setRowsPerPage: SetRowsPerPage,
  setPage: SetPage
) {
  const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (+event.target.value) {
      case 10:
        setRowsPerPage(10);
        break;
      case 25:
        setRowsPerPage(25);
        break;
      case 50:
        setRowsPerPage(50);
        break;
    }

    setPage(0);
  };
  return {
    onRowsPerPageChange,
  };
}
