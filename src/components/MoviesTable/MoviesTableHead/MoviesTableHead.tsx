import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useGetOnSelectAllClick, useGetOnSortHandle } from "./hooks";
import { headCells } from "../assets/constants";
import { MoviesTableHeadProps } from "../types";

export const MoviesTableHead = observer(
  ({
    order,
    orderBy,
    selected,
    movies,
    setOrder,
    setOrderBy,
    setSelected,
  }: MoviesTableHeadProps) => {
    const { onSortHandle } = useGetOnSortHandle(
      order,
      orderBy,
      setOrder,
      setOrderBy
    );
    const { onSelectAllClick } = useGetOnSelectAllClick(setSelected, movies);

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
              onChange={(event) => onSelectAllClick(event)}
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
                onClick={(event) => onSortHandle(event, headCell.id)}>
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
);
