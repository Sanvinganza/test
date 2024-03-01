import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const mockMovies = [
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

describe("Main test", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Info after click on screen", () => {
    const button = screen.getByText("Click");

    fireEvent.click(button);

    expect(screen.getByText("Click")).toBeDefined();
  });
});
