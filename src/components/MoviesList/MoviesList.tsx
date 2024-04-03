import { observer } from "mobx-react-lite";
import { useMovieTableContext } from "../MoviesTable/hooks/useMovieTableContext";
import { Movie } from "../MoviesTable/types";

export const MoviesList = observer(() => {
  const { movies } = useMovieTableContext();

  return (
    <>
      <h1>ALL Movies:</h1>
      {movies.map((movie: Movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}
    </>
  );
});
