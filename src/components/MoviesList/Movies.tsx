import { observer } from "mobx-react-lite";
import { IMovieListItem } from "./types";
import { useMovieListContext } from "./hooks/useMovieListContext";
import { AddMovieButton } from "./Buttons/AddMovieButton";
import { FilterMovieButton } from "./Buttons/FilterMovieButton";

export const Movies = observer(() => {
  const { movies } = useMovieListContext();

  return (
    <>
      <h1>Films :</h1>
      <br />
      <ul>
        {movies.map((movie: IMovieListItem, i: number) => (
          <ol key={i}>
            <h2>{movie.title}</h2>
            <h4>{movie.discribe}</h4>
          </ol>
        ))}
      </ul>
      <AddMovieButton />
      <FilterMovieButton />
    </>
  );
});
