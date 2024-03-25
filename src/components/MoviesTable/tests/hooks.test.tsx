import { render } from "@testing-library/react";
import { MovieTableContextProvider } from "../../../providers/MovieTableContextProvider";
import App from "../../../App";
import { renderHook } from "@testing-library/react-hooks";
import { useGetVisibleRows } from "../hooks";
import { useMovieTableContext } from "../../MoviesList/hooks/useMovieTableContext";
import { mockMoviesTable } from "./__mock__/mockMoviesTable";

describe("useGetVisibleRows: хук возвращает функцию", () => {
  const movieTableContext = renderHook(() => useMovieTableContext());

  movieTableContext.result.current.setOrderBy("id");

  beforeEach(() => {
    render(
      <MovieTableContextProvider>
        <App />
      </MovieTableContextProvider>
    );

    const getVisibleRows = renderHook(() => useGetVisibleRows());
    expect(getVisibleRows.result.current).toBeDefined();
    expect(movieTableContext.result.current).toBeDefined();
  });
  test("проверка начального состояния visibleRows", () => {
    movieTableContext.result.current.setMovieTableItem(mockMoviesTable);
    movieTableContext.result.current.setOrder("asc");
    movieTableContext.result.current.setOrderBy("id");
    movieTableContext.result.current.setPage(0);
    movieTableContext.result.current.setRowsPerPage(5);

    const { rowsPerPage } = movieTableContext.result.current;

    const getVisibleRows = renderHook(() => useGetVisibleRows());
    const { visibleRows } = getVisibleRows.result.current;

    expect(visibleRows).toEqual(mockMoviesTable.slice(0, rowsPerPage));
  });
  test("проверка visibleRows, при значениях page=0, rowsPerPage=25", () => {
    movieTableContext.result.current.setRowsPerPage(25);

    movieTableContext.result.current.setMovieTableItem(mockMoviesTable);

    const getVisibleRows = renderHook(() => useGetVisibleRows());
    const { visibleRows } = getVisibleRows.result.current;

    expect(visibleRows).toEqual(mockMoviesTable);
  });
  test("проверка visibleRows, при значениях page=4, rowsPerPage=5", () => {
    movieTableContext.result.current.setPage(4);
    movieTableContext.result.current.setRowsPerPage(5);

    movieTableContext.result.current.setMovieTableItem(mockMoviesTable);

    const getVisibleRows = renderHook(() => useGetVisibleRows());
    const { visibleRows } = getVisibleRows.result.current;

    expect(visibleRows).toEqual(mockMoviesTable.slice(-5));
  });
  test("проверка visibleRows, при значениях page=1, rowsPerPage=25", () => {
    movieTableContext.result.current.setPage(1);
    movieTableContext.result.current.setRowsPerPage(25);

    movieTableContext.result.current.setMovieTableItem(mockMoviesTable);

    const getVisibleRows = renderHook(() => useGetVisibleRows());
    const { visibleRows } = getVisibleRows.result.current;

    expect(visibleRows).toEqual([]);
  });
  test("проверка visibleRows, при значениях page=2, rowsPerPage=10", () => {
    movieTableContext.result.current.setPage(2);
    movieTableContext.result.current.setRowsPerPage(10);

    movieTableContext.result.current.setMovieTableItem(mockMoviesTable);

    const getVisibleRows = renderHook(() => useGetVisibleRows());
    const { visibleRows } = getVisibleRows.result.current;

    expect(visibleRows).toEqual(mockMoviesTable.slice(-5));
  });
});
