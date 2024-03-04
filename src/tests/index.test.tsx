import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { MoviesContextProvider } from "../providers/AppContextProvider";

describe("App", () => {
  beforeEach(() => {
    const { asFragment } = render(
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("При первом рендере отображается список с начальными значениями", () => {
    expect(screen.getByText("Lira")).toBeDefined();
    expect(screen.getByText("KOS impsom foues")).toBeDefined();
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
