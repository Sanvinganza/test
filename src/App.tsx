import { Movies } from "./components/Movies";
import { Button } from "./components/Button";
import { observer } from "mobx-react-lite";
import { useMoviesContext } from "./hooks/useAppContext";
import { toJS } from "mobx";

const App = observer(() => {
  const { movies } = useMoviesContext();

  return (
    <>
      <Movies movies={toJS(movies)} />
      <Button />
    </>
  );
});

export default App;
