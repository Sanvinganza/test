import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetDeleteMovieTableItem } from "./hooks";
import { observer } from "mobx-react-lite";
import { MoviesTableToolbarProps } from "../types";

export const MoviesTableToolbar = observer(
  ({ selected, movies, setMovies, setSelected }: MoviesTableToolbarProps) => {
    const { onDeleteMovieTableItems } = useGetDeleteMovieTableItem(
      movies,
      setMovies,
      selected,
      setSelected
    );

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
            <IconButton onClick={() => onDeleteMovieTableItems()}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }
);
