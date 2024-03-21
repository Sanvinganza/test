import { runInAction } from "mobx";
import { IMovieTableItem, Order } from "./types";

export const tableState = (movieTableItem: IMovieTableItem[]) => ({
  movieTableItem,
  setMovieTableItem(items: IMovieTableItem[]) {
    runInAction(() => {
      this.movieTableItem = items;
    });
  },
  page: 0,
  setPage(newPage: number) {
    runInAction(() => {
      this.page = newPage;
    });
  },
  rowsPerPage: 5,
  setRowsPerPage(newRowsPerPage: number) {
    runInAction(() => {
      this.rowsPerPage = newRowsPerPage;
    });
  },
  orderBy: "rating",
  setOrderBy(newOrderBy: keyof IMovieTableItem) {
    runInAction(() => {
      this.orderBy = newOrderBy;
    });
  },
  order: "asc",
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
});
