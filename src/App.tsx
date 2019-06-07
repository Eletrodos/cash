import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

/** Aplicação principal */
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Home />
      </React.Fragment>
    );
  }
}
