import { rowsPerPageOptions } from "./constants";
import { movieTableState } from "./stateMovieTable";

export type IMovie = {
  id: number;
  title: string;
  rating: string;
  timeline: string;
  year: string;
};

export type Order = "asc" | "desc";

export interface HeadCell {
  disablePadding: boolean;
  id: keyof IMovie;
  label: string;
  numeric: boolean;
}

export type OrderBy = keyof IMovie;

export type IMovieTableState = typeof movieTableState;

export interface MoviesTableHeadProps {
  order: Order;
  orderBy: keyof IMovie;
  setOrderBy: (orderBy: OrderBy) => void;
  setOrder: (order: Order) => void;
  selected: Selected;
  movies: IMovie[];
}

export type Selected = number[];

export interface MoviesTableToolbarProps {
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
  selected: Selected;
  setSelected: (selected: Selected) => void;
}

export interface MoviesTableBodyProps {
  selected: Selected;
  order: Order;
  orderBy: keyof IMovie;
  setOrderBy: (orderBy: OrderBy) => void;
  setOrder: (order: Order) => void;
  movies: IMovie[];
  page: number;
  rowsPerPage: rowsPerPageOptions;
}

export type rowsPerPageOptions = (typeof rowsPerPageOptions)[number];
