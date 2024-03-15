import { observer } from "mobx-react-lite";
import { MovieList } from "./components/MoviesList";
// import { MovieTable } from "./components/MoviesTable/TableMovies";

const App = observer(() => {
  return (
    <>
      <MovieList />
      {/* <MovieTable /> */}
    </>
  );
});

export default App;
