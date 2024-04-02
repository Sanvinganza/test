import { observer } from "mobx-react-lite";
import { AddMovieButton } from "./Buttons/AddMovieButton";
import { FilterMovieButton } from "./Buttons/FilterMovieButton";
import { useMovieTableContext } from "../MoviesTable/hooks/useMovieTableContext";
import { IMovie } from "../MoviesTable/types";

export const Movies = observer(() => {
  const { movies, selected } = useMovieTableContext();

  return (
    <>
      <h1>Films :</h1>
      <br />
      <ul>
        {movies.map(
          (movie: IMovie, i: number) =>
            selected.includes(i) && (
              <ol key={i}>
                <h2>{movie.title}</h2>
              </ol>
            )
        )}
      </ul>
      <AddMovieButton />
      <FilterMovieButton />
    </>
  );
});
