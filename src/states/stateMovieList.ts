import { observable, runInAction, toJS } from "mobx";
import { IMovieListItem } from "../components/MoviesList/types";

export const movieListState = {
  movies: observable.array<IMovieListItem>([
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
  ]),
  setMovies(movies: IMovieListItem[]) {
    runInAction(() => {
      this.movies = observable.array<IMovieListItem>(movies);
    });
    console.log("set", toJS(this.movies));
  },
};
