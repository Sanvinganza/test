import { IMovie, Selected } from "../types";

export const deleteMovieTableHookUtils = (
  selected: Selected,
  movies: IMovie[]
) => {
  let newMovies = [...movies] as IMovie[];

  selected.forEach((selectedItem) => {
    newMovies = newMovies.filter((movie: IMovie) => movie.id !== selectedItem);
  });

  return newMovies;
};
