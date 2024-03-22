import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { HeadCell, IMovieTableItem } from "../types";
import { useMovieTableContext } from "../../MoviesList/hooks/useMovieTableContext";
import { observer } from "mobx-react-lite";

const headCells: readonly HeadCell[] = [
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "TITLE",
  },
  {
    id: "rating",
    numeric: true,
    disablePadding: false,
    label: "RATING",
  },
  {
    id: "timeline",
    numeric: true,
    disablePadding: false,
    label: "TIMELINE",
  },
  {
    id: "year",
    numeric: true,
    disablePadding: false,
    label: "YEAR",
  },
];

export const MoviesTableHead = observer(() => {
  const {
    movies,
    order,
    orderBy,
    selected,
    setSelected,
    setOrder,
    setOrderBy,
  } = useMovieTableContext();

  const onRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof IMovieTableItem
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = movies.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const createSortHandler =
    (property: keyof IMovieTableItem) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={
              selected.length > 0 && selected.length < movies.length
            }
            checked={movies.length > 0 && selected.length === movies.length}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
});
