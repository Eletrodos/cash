import React from "react";
import { CssBaseline } from "@material-ui/core";

import AppRouter from "./components/Router";

/** Aplicação principal */
const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppRouter />
    </React.Fragment>
  );
};

export default App;
