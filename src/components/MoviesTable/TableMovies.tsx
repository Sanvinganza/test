import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { MoviesTableToolbar } from "./MoviesTableToolbar/MoviesTableToolbar";
import { MoviesTableHead } from "./MoviesTableHead/MoviesTableHead";
import { MoviesTableBody } from "./MoviesTableBody/MoviesTableBody";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useGetOnRowsPerPageChange } from "./hooks/useGetOnRowsPerPageChange";
import { useGetOnPageChange } from "./hooks/useGetOnPageChange";
import { movieTableState } from "./stateMovieTable";

export const TableMovies = observer(() => {
  const {
    movies,
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
    selected,
    order,
    setMovies,
    orderBy,
    setOrderBy,
    setOrder,
    setSelected,
  } = useLocalObservable(() => movieTableState);

  const { onRowsPerPageChange } = useGetOnRowsPerPageChange(
    setRowsPerPage,
    setPage
  );

  const { onPageChange } = useGetOnPageChange(setPage);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <MoviesTableToolbar
          selected={selected}
          movies={movies}
          setMovies={setMovies}
          setSelected={setSelected}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}>
            <MoviesTableHead
              movies={movies}
              selected={selected}
              order={order}
              orderBy={orderBy}
              setSelected={setSelected}
              setOrder={setOrder}
              setOrderBy={setOrderBy}
            />
            <MoviesTableBody
              movies={movies}
              order={order}
              orderBy={orderBy}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={selected}
              setSelected={setSelected}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPage={rowsPerPage}
          component="div"
          count={movies.length}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </Paper>
    </Box>
  );
});
