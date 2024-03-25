import { beforeEach, describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { MovieTableContextProvider } from "../../../providers/MovieTableContextProvider";
import App from "../../../App";
import { renderHook } from "@testing-library/react-hooks";
import { useMovieTableContext } from "../../MoviesList/hooks/useMovieTableContext";
import { mockMoviesTable } from "./__mock__/mockMoviesTable";
import { mockMovie1 } from "./__mock__/mockMovie";

describe("проверка инициализации stateMovieTable", () => {
  const { result } = renderHook(() => useMovieTableContext());
  beforeEach(() => {
    render(
      <MovieTableContextProvider>
        <App />
      </MovieTableContextProvider>
    );
  });

  test("state инициализируeтся корректно", () => {
    expect(result.current).toBeDefined();

    const { movies, order, page, selected, rowsPerPage, orderBy } =
      result.current;

    expect(movies).toEqual(mockMoviesTable);
    expect(order).toEqual("asc");
    expect(page).toEqual(0);
    expect(rowsPerPage).toEqual(5);
    expect(selected).toEqual([]);
    expect(orderBy).toEqual("rating");
  });

  test("set-функции работают корректно", () => {
    const { result } = renderHook(() => useMovieTableContext());

    result.current.setMovieTableItem([mockMovie1]);
    result.current.setOrder("desc");
    result.current.setOrderBy("id");
    result.current.setPage(2);
    result.current.setRowsPerPage(10);
    result.current.setSelected([1, 2, 3, 5]);

    expect(result.current.movies).toEqual([mockMovie1]);
    expect(result.current.order).toEqual("desc");
    expect(result.current.orderBy).toEqual("id");
    expect(result.current.page).toEqual(2);
    expect(result.current.rowsPerPage).toEqual(10);
    expect(result.current.selected).toEqual([1, 2, 3, 5]);
  });
});
