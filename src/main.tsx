import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App.tsx";

import { MovieListContextProvider } from "./providers/MovieListContextProvider.tsx";
import { MovieTableContextProvider } from "./providers/MovieTableContextProvider.tsx";

ReactDOM.render(
  <React.StrictMode>
    <MovieListContextProvider>
      <MovieTableContextProvider>
        <App />
      </MovieTableContextProvider>
    </MovieListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
