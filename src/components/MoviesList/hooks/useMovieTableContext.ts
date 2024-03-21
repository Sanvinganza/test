import { createContext, useContext } from "react";
import { movieTableState } from "../../../states/stateMovieTable";

export const MovieTableContext = createContext(movieTableState);

export const useMovieTableContext = () => useContext(MovieTableContext);
