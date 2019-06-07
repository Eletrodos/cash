import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";

import SignIn from "./pages/SignIn";

/** Aplicação principal */
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <SignIn />
      </React.Fragment>
    );
  }
}
