import { FC } from "react";
import { movieListContext } from "../components/MoviesList/hooks/useMovieListContext";
import { useLocalObservable } from "mobx-react-lite";
import { movieListState } from "../states/stateMovieList";

export const MovieListContextProvider: FC<any> = ({ children }) => {
  const movieListStatelocalObservable = useLocalObservable(
    () => movieListState
  );
  return (
    <movieListContext.Provider
      value={movieListStatelocalObservable}
      children={children}
    />
  );
};
