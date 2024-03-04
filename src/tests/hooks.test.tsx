import { describe, test } from "vitest";
import { useMoviesContext } from "../hooks/useAppContext";
import { renderHook } from "@testing-library/react-hooks";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { MoviesContextProvider } from "../providers/AppContextProvider";
import { IMovie } from "../components/Movies";

describe("HOOKS", () => {
  beforeEach(() => {
    render(
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    );
  });

  const { result } = renderHook(() => useMoviesContext());

  test("получить начальное количество movies из хука useMoviesContext", () => {
    expect(result.current.movies.length).toEqual(1);
  });

  test("получить значение movies после 3 нажатий на button", () => {
    const button = screen.getByTestId("button-change-id");

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getAllByText("Harry").length).toEqual(3);
    expect(result.current.movies.length).toEqual(4);
  });

  test("изменить значение movies с помощью вызова хука", () => {
    const mockMovies: IMovie[] = [
      {
        id: 1,
        title: "DR.Strange",
        describe:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, magni/",
      },
      {
        id: 2,
        title: "Harry Potter",
        describe:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, magni/",
      },
      {
        id: 3,
        title: "Star Wars",
        describe:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, magni/",
      },
    ];

    mockMovies.forEach((movie: IMovie) => {
      result.current.setMovies(movie);
    });

    expect(
      screen.getAllByText(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, magni/"
      ).length
    ).toEqual(3);
  });
});
