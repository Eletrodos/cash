import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";

/** Aplicação principal */
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div>Olá mundo!</div>
      </React.Fragment>
    );
  }
}
