import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App.tsx";

import { MovieListContextProvider } from "./providers/MovieListContextProvider.tsx";

ReactDOM.render(
  <React.StrictMode>
    <MovieListContextProvider>
      <App />
    </MovieListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
