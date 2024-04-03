import { mockMoviesTable } from "../../tests/__mock__/mockMoviesTable";
import { Movies } from "../../types";
import { deleteMovieTableHookUtils } from "../utils";

describe("Utils MoviesTableToolbar", () => {
  test("deleteMovieTableHookUtils", () => {
    const mockSelected = [5, 3];
    const mockArray = mockMoviesTable.slice(0, 5) as Movies;

    const result = deleteMovieTableHookUtils(mockSelected, mockArray);

    expect(result).toEqual(mockMoviesTable.slice(0, 3));
  });
});
