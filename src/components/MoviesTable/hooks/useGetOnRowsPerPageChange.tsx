export function useGetOnRowsPerPageChange(
  setRowsPerPage: (T: 5 | 10 | 25) => void,
  setPage: (T: number) => void
) {
  
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
