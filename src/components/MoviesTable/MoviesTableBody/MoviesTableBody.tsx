import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { useMovieTableContext } from "../../MoviesList/hooks/useMovieTableContext";
import { observer } from "mobx-react-lite";
import { useGetVisibleRows } from "../hooks";
import { useGetHandleSelectRow } from "./hooks";

export const MoviesTableBody = observer(() => {
  const { selected } = useMovieTableContext();
  const { visibleRows } = useGetVisibleRows();
  const { handleSelectRow } = useGetHandleSelectRow();
  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        const isItemSelected = selected.indexOf(row.id) !== -1;
        const labelId = `table-checkbox-${index}`;

        return (
          <TableRow
            hover
            onClick={() => handleSelectRow(row.id)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.title}
            selected={isItemSelected}
            sx={{ cursor: "pointer" }}>
            <TableCell
              padding="checkbox"
              children={
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              }
            />
            <TableCell
              component="th"
              id={labelId}
              scope="row"
              padding="none"
              children={row.title}
            />
            <TableCell align="right">{row.rating}</TableCell>
            <TableCell align="right">{row.timeline}</TableCell>
            <TableCell align="right">{row.year}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
});
