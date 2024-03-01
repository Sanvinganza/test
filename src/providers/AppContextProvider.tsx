import { FC } from "react";
import { moviesContext } from "../hooks/useAppContext";
import { useLocalObservable } from "mobx-react-lite";
import { moviesState } from "../state";

export const MoviesContextProvider: FC<any> = ({ children }) => {
  const moviesStatelocalObservable = useLocalObservable(() => moviesState);

  return (
    <moviesContext.Provider value={moviesStatelocalObservable}>
      {children}
    </moviesContext.Provider>
  );
};
