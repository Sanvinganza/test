import { IObservableArray } from "mobx";
import { rowsPerPage } from "./constants";

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Movie;
  label: string;
  numeric: boolean;
}

export type Movie = {
  id: number;
  title: string;
  rating: string;
  timeline: string;
  year: string;
};
export type SetMovies = (movie: Movies) => void;
export type Order = "asc" | "desc";
export type SetOrder = (order: Order) => void;
export type Page = number;
export type SetPage = (page: Page) => void;
export type Selected = number[];
export type SetSelected = (selected: Selected) => void;
export type OrderBy = keyof Movie;
export type SetOrderBy = (orderBy: OrderBy) => void;
export type RowsPerPage = (typeof rowsPerPage)[number];
export type SetRowsPerPage = (rowsPerPage: RowsPerPage) => void;

export type Movies = IObservableArray<Movie>;

export interface MovieTableState {
  movies: IObservableArray<Movie>;
  setMovies: SetMovies;
  order: Order;
  setOrder: SetOrder;
  selected: Selected;
  setSelected: SetSelected;
  page: Page;
  setPage: SetPage;
  rowsPerPage: RowsPerPage;
  setRowsPerPage: SetRowsPerPage;
  orderBy: OrderBy;
  setOrderBy: SetOrderBy;
}

export interface MoviesTableHeadProps {
  order: Order;
  orderBy: OrderBy;
  selected: Selected;
  movies: Movies;
  setOrderBy: SetOrderBy;
  setOrder: SetOrder;
  setSelected: SetSelected;
}

export interface MoviesTableToolbarProps {
  movies: Movies;
  setMovies: SetMovies;
  selected: Selected;
  setSelected: SetSelected;
}

export type MoviesTableBodyProps = {
  selected: Selected;
  movies: Movies;
  order: Order;
  orderBy: OrderBy;
  page: Page;
  rowsPerPage: RowsPerPage;
  setSelected: SetSelected;
};
