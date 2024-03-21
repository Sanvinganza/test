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

export function TableMovies() {
  const { movies, page, rowsPerPage, selected, setPage, setRowsPerPage } =
    useMovieTableContext();

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
