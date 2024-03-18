import { createContext, useContext } from "react";
import { movieListState } from "../../../states/stateMovieList";

export const MovieListContext = createContext(movieListState);

export const useMovieListContext = () => useContext(MovieListContext);
