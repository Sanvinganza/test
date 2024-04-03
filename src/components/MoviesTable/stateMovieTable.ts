import { observable, runInAction } from "mobx";
import { MovieTableState } from "./types";
import { movieTableItemsData } from "./assets/constants";

export const movieTableState: MovieTableState = {
  movies: observable.array(movieTableItemsData),
  setMovies(newMovies) {
    runInAction(() => {
      this.movies.replace(newMovies);
    });
  },
  page: 0,
  setPage(newPage) {
    runInAction(() => {
      this.page = newPage;
    });
  },
  rowsPerPage: 10,
  setRowsPerPage(newRowsPerPage) {
    runInAction(() => {
      this.rowsPerPage = newRowsPerPage;
    });
  },
  orderBy: "id",
  setOrderBy(newOrderBy) {
    runInAction(() => {
      this.orderBy = newOrderBy;
    });
  },
  order: "asc",
  setOrder(newOrder) {
    runInAction(() => {
      this.order = newOrder;
    });
  },
  selected: [],
  setSelected(newSelected) {
    runInAction(() => {
      this.selected = newSelected;
    });
  },
};
