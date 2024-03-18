import { runInAction } from "mobx";
import { IMovieTableItem } from "./types";

export const tableState = (movieTableItem: IMovieTableItem[]) => ({
  movieTableItem,
  setMovieTableItem(items: IMovieTableItem[]) {
    runInAction(() => {
      this.movieTableItem = items;
    });
  },
});
