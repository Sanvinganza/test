import { FC } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { movieTableState } from "../components/MoviesTable/stateMovieTable";
import { MovieTableContext } from "../components/MoviesList/hooks/useMovieTableContext";

export const MovieTableContextProvider: FC<any> = ({ children }) => {
  const movieTableStatelocalObservable = useLocalObservable(
    () => movieTableState
  );

  return (
    <MovieTableContext.Provider
      value={movieTableStatelocalObservable}
      children={children}
    />
  );
};
