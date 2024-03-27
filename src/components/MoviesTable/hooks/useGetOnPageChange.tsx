import { useMovieTableContext } from "./useMovieTableContext";

export function useGetOnPageChange() {
  const { setPage } = useMovieTableContext();

  const onPageChange = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  return {
    onPageChange,
  };
}
