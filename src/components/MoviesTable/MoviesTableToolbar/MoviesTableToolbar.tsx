import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EnhancedTableToolbarProps as MoviesTableToolbarProps } from "../types";

export function MoviesTableToolbar(props: MoviesTableToolbarProps) {
  const { numSelected } = props;

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
      {!!numSelected && (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
