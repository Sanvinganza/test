import { MovieListContextProvider } from "../../providers/MovieListContextProvider";
import { Movies } from "./Movies";

export const MovieList = () => {
  return (
    <>
      <MovieListContextProvider>
        <Movies />
      </MovieListContextProvider>
    </>
  );
};
