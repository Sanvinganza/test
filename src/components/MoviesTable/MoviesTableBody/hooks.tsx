import { Selected } from "../types";
import { onSelectRowHookUtils } from "./utils";

export const useGetOnSelectRow = (
  selected: Selected,
  setSelected: (selected: Selected) => void
) => {
  const onSelectRow = (id: number) => {
    setSelected(onSelectRowHookUtils(selected, id));
  };

  return {
    onSelectRow,
  };
};
