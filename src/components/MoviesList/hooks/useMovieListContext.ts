import { createContext, useContext } from "react";
import { movieListState } from "../../../states/stateMovieList";

export const movieListContext = createContext(movieListState);

export const useMovieListContext = () => {
  console.log("rer cntx");
  return useContext(movieListContext);
};
