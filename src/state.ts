import { observable, runInAction } from "mobx";
import { IMovie } from "./components/Movies";

export const moviesState = {
  movies: observable.array<IMovie>([]),
  setMovies(movie: IMovie) {
    runInAction(() => {
      this.movies.push(movie);
    });
  },
};
