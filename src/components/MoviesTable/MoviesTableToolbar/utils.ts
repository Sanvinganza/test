import { IMovieTableItem } from "../types";

export const deleteMovieTableHookUtils = (
  selected: number[],
  movies: IMovieTableItem[]
) => {
  let newMovies = [...movies] as IMovieTableItem[];

  selected.forEach((selectedItem: number) => {
    newMovies = newMovies.filter(
      (movie: IMovieTableItem) => movie.id !== selectedItem
    );
  });

  return newMovies;
};
