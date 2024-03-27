import { observable, runInAction } from "mobx";
import { IMovieTableItem, Order } from "./types";
import { movieTableItemsData } from "./assets/constants";

export const movieTableState = {
  movies: observable.array<IMovieTableItem>(movieTableItemsData),
  setMovie(newMovies: IMovieTableItem[]) {
    runInAction(() => {
      this.movies.replace(newMovies);
    });
  },
  page: 0,
  setPage(newPage: number) {
    runInAction(() => {
      this.page = newPage;
    });
  },
  rowsPerPage: 5 as 5 | 10 | 25,
  setRowsPerPage(newRowsPerPage: 5 | 10 | 25) {
    runInAction(() => {
      this.rowsPerPage = newRowsPerPage;
    });
  },
  orderBy: "id" as keyof IMovieTableItem,
  setOrderBy(newOrderBy: keyof IMovieTableItem) {
    runInAction(() => {
      this.orderBy = newOrderBy;
    });
  },
  order: "asc" as Order,
  setOrder(newOrder: Order) {
    runInAction(() => {
      this.order = newOrder;
    });
  },
  selected: [] as number[],
  setSelected(newSelected: number[]) {
    runInAction(() => {
      this.selected = newSelected;
    });
  },
};