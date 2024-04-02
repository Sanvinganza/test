import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App.tsx";

import { MovieTableContextProvider } from "./providers/MovieTableContextProvider.tsx";

ReactDOM.render(
  <React.StrictMode>
    <MovieTableContextProvider>
      <App />
    </MovieTableContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
