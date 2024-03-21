export type IMovieTableItem = {
  id: number;
  title: string;
  rating: string;
  timeline: string;
  year: string;
};

export type Order = "asc" | "desc";

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof IMovieTableItem;
  label: string;
  numeric: boolean;
}
export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IMovieTableItem
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface MoviesTableBody {}
