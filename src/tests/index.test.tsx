import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { MovieListContextProvider } from "../providers/MovieListContextProvider";

describe("App", () => {
  beforeEach(() => {
    const { asFragment } = render(
      <MovieListContextProvider>
        <App />
      </MovieListContextProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("После нажатия кнопки отображается элемент", () => {
    const button = screen.getByTestId("button-change-id");

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getAllByText("Harry").length).toEqual(3);
    expect(screen.getAllByText("Lorem impsom foues")).toBeDefined();
  });
});
