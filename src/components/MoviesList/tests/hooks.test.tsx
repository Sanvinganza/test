import { describe, test } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { fireEvent, render, screen } from "@testing-library/react";
import { mockMovies } from "./__mock__/mockMovies";
import { MovieListContextProvider } from "../../../providers/MovieListContextProvider";
import { useMovieListContext } from "../hooks/useMovieListContext";
import App from "../../../App";

describe("HOOKS", () => {
  beforeEach(() => {
    render(
      <MovieListContextProvider>
        <App />
      </MovieListContextProvider>
    );
  });

  const { result } = renderHook(() => useMovieListContext());

  test("получить начальное количество movies из хука useMoviesContext", () => {
    expect(result.current.movies.length).toEqual(3);
  });

  test("получить значение movies после 3 нажатий на button", () => {
    const button = screen.getByTestId("button-change-id");

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getAllByText("Harry").length).toEqual(3);
  });

  test("useMovieListContext", () => {
    result.current.setMovies(mockMovies);

    expect(
      screen.getAllByText(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, magni/"
      ).length
    ).toEqual(3);

    expect(result.current.movies).toEqual(mockMovies);
  });
});
