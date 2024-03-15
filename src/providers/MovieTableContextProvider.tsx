import { FC } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { movieTableState } from "../states/stateMovieTable";
import { movieTableContext } from "../components/MoviesList/hooks/useMovieTableContext";

export const MovieTableContextProvider: FC<any> = ({ children }) => {
  const movieTableStatelocalObservable = useLocalObservable(
    () => movieTableState
  );

  return (
    <movieTableContext.Provider value={movieTableStatelocalObservable}>
      {children}
    </movieTableContext.Provider>
  );
};
