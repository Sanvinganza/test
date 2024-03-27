import { observable, runInAction } from "mobx";
import { IMovieTableItem, Order } from "../../../types";
import { mockMoviesTable } from "../../../tests/__mock__/mockMoviesTable";

export const mockMovieTableState = {
  movies: observable.array<IMovieTableItem>(mockMoviesTable),
  setMovie(movies: IMovieTableItem[]) {
    runInAction(() => {
      this.movies = observable.array<IMovieTableItem>(movies);
    });
  },
  page: 1,
  setPage(newPage: number) {
    runInAction(() => {
      this.page = newPage;
    });
  },
  rowsPerPage: 10 as 5 | 10 | 25,
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
  order: "desc" as Order,
  setOrder(newOrder: Order) {
    runInAction(() => {
      this.order = newOrder;
    });
  },
  selected: [3, 5, 7] as number[],
  setSelected(newSelected: number[]) {
    runInAction(() => {
      this.selected = newSelected;
    });
  },
};
