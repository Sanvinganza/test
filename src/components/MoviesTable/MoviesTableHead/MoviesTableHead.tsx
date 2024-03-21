import {
  Box,
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { HeadCell, IMovieTableItem } from "../types";
import { visuallyHidden } from "@mui/utils";
import { useMovieTableContext } from "../../MoviesList/hooks/useMovieTableContext";

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

export function MoviesTableHead() {
  const {
    movies,
    order,
    orderBy,
    selected,
    rowsPerPage,
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

  const numSelected = selected.length;
  const rowCount = rowsPerPage;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
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
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
