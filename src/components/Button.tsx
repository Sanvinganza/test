import { useMoviesContext } from "../hooks/useAppContext";

export const Button = () => {
  const { setMovies } = useMoviesContext();

  const handleOnClick = () => {
    setMovies({
      id: 1,
      describe: "Lorem impsom foues",
      title: "Harry",
    });
  };

  return (
    <button data-testid="button-change-id" onClick={handleOnClick}>
      Click
    </button>
  );
};
