import { runInAction } from "mobx";
import { useMovieTableContext } from "../../MoviesList/hooks/useMovieTableContext";

export const useGetOnSelectRow = () => {
  const { selected, setSelected } = useMovieTableContext();

  const onSelectRow = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    runInAction(() => {
      setSelected(newSelected);
    });
  };
  return {
    onSelectRow,
  };
};
