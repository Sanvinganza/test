import { observable, runInAction } from "mobx";
import { IMovie } from "./components/Movies";

export const moviesState = {
  movies: observable.array<IMovie>([
    {
      id: 0,
      describe: "KOS impsom foues",
      title: "Lira",
    },
  ]),
  setMovies(movie: IMovie) {
    runInAction(() => {
      this.movies.push(movie);
    });
  },
};
