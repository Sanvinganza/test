import { createContext, useContext } from "react";
import { moviesState } from "../state";

export const moviesContext = createContext(moviesState);

export const useMoviesContext = () => useContext(moviesContext);
