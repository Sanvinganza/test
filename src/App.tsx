import { observer } from "mobx-react-lite";
import { TableMovies } from "./components/MoviesTable";

const App = observer(() => {
  return (
    <>
      <TableMovies />
    </>
  );
});

export default App;
