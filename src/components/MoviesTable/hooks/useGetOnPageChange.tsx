export function useGetOnPageChange(setPage: (page: number) => void) {
  const onPageChange = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  return {
    onPageChange,
  };
}
