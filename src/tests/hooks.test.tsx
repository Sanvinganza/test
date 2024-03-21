import { describe, test } from "vitest";
import { useMovieListContext } from "../components/MoviesList/hooks/useMovieListContext";
import { renderHook } from "@testing-library/react-hooks";
import { fireEvent, render, screen } from "@testing-library/react";
import { MovieListContextProvider } from "../providers/MovieListContextProvider";
import { toJS } from "mobx";
import App from "../App";
import { mockMovies } from "./__mock__/mockMovies";
import { MovieTableContextProvider } from "../providers/MovieTableContextProvider";

describe("HOOKS", () => {
  beforeEach(() => {
    const { asFragment } = render(
      <MovieTableContextProvider>
        <MovieListContextProvider>
          <App />
        </MovieListContextProvider>
      </MovieTableContextProvider>
    );

    expect(asFragment()).toMatchSnapshot();
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

  test("useAppContext", () => {
    result.current.setMovies(mockMovies);

    expect(
      screen.getAllByText(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, magni/"
      ).length
    ).toEqual(3);

    expect(toJS(result.current.movies)).toEqual(mockMovies);
  });
});
