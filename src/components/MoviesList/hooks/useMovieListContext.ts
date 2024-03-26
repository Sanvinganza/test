import { createContext, useContext } from "react";
import { movieListState } from "../stateMovieList";

export const MovieListContext = createContext(movieListState);

export const useMovieListContext = () => useContext(MovieListContext);
