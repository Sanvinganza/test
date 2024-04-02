import { observer } from "mobx-react-lite";
import { useMovieTableContext } from "../MoviesTable/hooks/useMovieTableContext";
import { IMovie } from "../MoviesTable/types";

export const MoviesList = observer(() => {
  const { movies } = useMovieTableContext();

  return (
    <>
      <h1>ALL Movies:</h1>
      {movies.map((movie: IMovie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}
    </>
  );
});
