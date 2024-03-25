import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { useMovieTableContext } from "../MoviesList/hooks/useMovieTableContext";
import { MoviesTableToolbar } from "./MoviesTableToolbar/MoviesTableToolbar";
import { MoviesTableHead } from "./MoviesTableHead/MoviesTableHead";
import { MoviesTableBody } from "./MoviesTableBody/MoviesTableBody";
import { observer } from "mobx-react-lite";

export const TableMovies = observer(() => {
  const { movies, page, rowsPerPage, selected, setPage, setRowsPerPage } =
    useMovieTableContext();
  const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (+event.target.value) {
      case 5:
        setRowsPerPage(5);
        break;
      case 10:
        setRowsPerPage(10);
        break;
      case 25:
        setRowsPerPage(25);
        break;
    }

    setPage(0);
  };
  const onPageChange = (_: unknown, newPage: number) => {
    setPage(newPage);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <MoviesTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}>
            <MoviesTableHead />
            <MoviesTableBody />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={movies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </Paper>
    </Box>
  );
});
