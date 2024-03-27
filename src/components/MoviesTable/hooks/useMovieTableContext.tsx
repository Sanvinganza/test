import { createContext, useContext } from "react";
import { movieTableState } from "../../MoviesTable/stateMovieTable";

export const MovieTableContext = createContext(movieTableState);

export const useMovieTableContext = () => useContext(MovieTableContext);
