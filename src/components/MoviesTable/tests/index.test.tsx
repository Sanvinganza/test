import { beforeEach, describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { MovieTableContextProvider } from "../../../providers/MovieTableContextProvider";
import App from "../../../App";

describe("MovieTable", () => {
  beforeEach(() => {
    const { asFragment } = render(
      <MovieTableContextProvider>
        <App />
      </MovieTableContextProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("", () => {});

  test("", () => {});
});
