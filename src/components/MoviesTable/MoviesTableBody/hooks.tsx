import { useMovieTableContext } from "../hooks/useMovieTableContext";
import { onSelectRowHookUtils } from "./utils";

export const useGetOnSelectRow = () => {
  const { selected, setSelected } = useMovieTableContext();

  const onSelectRow = (id: number) => {
    setSelected(onSelectRowHookUtils(selected, id));
  };

  return {
    onSelectRow,
  };
};
