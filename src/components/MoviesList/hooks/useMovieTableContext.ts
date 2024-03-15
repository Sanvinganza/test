import { createContext, useContext } from "react";
import { movieTableState } from "../../../states/stateMovieTable";

export const movieTableContext = createContext(movieTableState);

export const useMovieTableContext = () => useContext(movieTableContext);
