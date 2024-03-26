export type IMovieTableItem = {
  id: number;
  title: string;
  rating: string;
  timeline: string;
  year: string;
};

export type Order = "asc" | "desc";

export interface HeadCell {
  disablePadding: boolean;
  id: keyof IMovieTableItem;
  label: string;
  numeric: boolean;
}
