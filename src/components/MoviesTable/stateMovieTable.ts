import { observable, runInAction } from "mobx";
import { IMovie, Order, Selected, rowsPerPageOptions } from "./types";
import { movieTableItemsData } from "./assets/constants";

export const movieTableState = {
  movies: observable.array<IMovie>(movieTableItemsData),
  setMovies(newMovies: IMovie[]) {
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
  rowsPerPage: 5 as rowsPerPageOptions,
  setRowsPerPage(newRowsPerPage: rowsPerPageOptions) {
    runInAction(() => {
      this.rowsPerPage = newRowsPerPage;
    });
  },
  orderBy: "id" as keyof IMovie,
  setOrderBy(newOrderBy: keyof IMovie) {
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
  selected: [1] as Selected,
  setSelected(newSelected: Selected) {
    runInAction(() => {
      this.selected = newSelected;
    });
  },
};
