import { useLocalObservable } from "mobx-react-lite";
import { tableState } from "./state";

export const useTable = (cols: any) => {
  const table = useLocalObservable(() => tableState(cols));
  return table;
};
