import { Movie, Movies, Selected } from "../types";

export const deleteMovieTableHookUtils = (
  selected: Selected,
  movies: Movies
) => {
  let newMovies = [...movies] as Movies;

  selected.forEach((selectedItem) => {
    newMovies = newMovies.filter(
      (movie: Movie) => movie.id !== selectedItem
    ) as Movies;
  });

  return newMovies;
};
