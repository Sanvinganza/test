import { runInAction } from "mobx";
import { ICol } from "./types";

export const tableState = (columns: ICol[]) => ({
  columns,
  setColumns(cols: ICol[]) {
    runInAction(() => {
      this.columns = cols;
    });
  },
});
