import { beforeEach, describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import App from "../../../App";
import { renderHook } from "@testing-library/react-hooks";
import { mockMovie1 } from "./__mock__/mockMovie";
import { MovieTableContextProvider } from "../../../providers/MovieTableContextProvider";
import { useMovieTableContext } from "../hooks/useMovieTableContext";
import { Movies } from "../types";

describe("stateMovieTable", () => {
  beforeEach(() => {
    render(<MovieTableContextProvider children={<App />} />);
  });

  test("set-функции работают корректно", () => {
    const { result } = renderHook(() => useMovieTableContext());
    result.current.setMovies([mockMovie1] as Movies);
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
