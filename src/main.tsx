import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App.tsx";

import { MoviesContextProvider } from "./providers/AppContextProvider.tsx";

ReactDOM.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
