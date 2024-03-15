import { action } from "mobx";
import { IMovieListItem } from "../types";

export type IField = "id" | "title" | "discribe";

export const useFilterByField = action(
  "FilteByField",
  (
    field: IField,
    movies: IMovieListItem[],
    setMovies: (movies: IMovieListItem[]) => void
  ) => {
    switch (field) {
      case "id":
        setMovies(
          movies.sort((a: IMovieListItem, b: IMovieListItem) => a.id - b.id)
        );
        break;
      case "title":
        setMovies(
          movies.sort((a: IMovieListItem, b: IMovieListItem) => {
            const first = a.title.toUpperCase();
            const second = b.title.toUpperCase();

            if (first > second) return -1;
            if (first < second) return 1;

            return 0;
          })
        );
        break;
      case "discribe":
        setMovies(
          movies.sort((a: IMovieListItem, b: IMovieListItem) => {
            const first = a.discribe.toUpperCase();
            const second = b.discribe.toUpperCase();

            if (first > second) return -1;
            if (first < second) return 1;

            return 0;
          })
        );
        break;
    }
  }
);