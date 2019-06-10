import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";

import AppRouter from "./components/Router";

/** Aplicação principal */
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppRouter />
      </React.Fragment>
    );
  }
}
