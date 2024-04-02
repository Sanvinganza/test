import { observable, runInAction } from "mobx";
import { IMovieListItem } from "./types";

const initialData = [
  {
    id: 1,
    title: "DR.Strange",
    discribe:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, magni/",
  },
  {
    id: 2,
    title: "Harry Potter",
    discribe:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, magni/",
  },
  {
    id: 3,
    title: "Star Wars",
    discribe:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, magni/",
  },
];

export const movieListState = {
  movies: observable.array<IMovieListItem>(initialData),
  setMoviess(movies: IMovieListItem[]) {
    runInAction(() => {
      this.movies = observable.array<IMovieListItem>(movies);
    });
  },
};
