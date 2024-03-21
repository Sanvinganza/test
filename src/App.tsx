import { observer } from "mobx-react-lite";
import { TableMovies } from "./components/MoviesTable";
import { MovieList } from "./components/MoviesList";

const App = observer(() => {
  return (
    <>
      <TableMovies />
      <MovieList />
    </>
  );
});

export default App;
