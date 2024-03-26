import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetDeleteMovieTableItem } from "./hooks";
import { useMovieTableContext } from "../../MoviesList/hooks/useMovieTableContext";

export function MoviesTableToolbar() {
  const { selected } = useMovieTableContext();
  const { deleteMovieTableItems } = useGetDeleteMovieTableItem();

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h3"
        fontFamily={"cursive"}
        id="tableTitle"
        component="div">
        TOP 25 MOVIES EVER
      </Typography>
      {!!selected.length && (
        <Tooltip title="Delete">
          <IconButton onClick={() => deleteMovieTableItems()}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
