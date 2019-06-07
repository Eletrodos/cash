import React from "react";

import * as fb from "../services/fb";

export default class SignIn extends React.Component {
  private elemRef = React.createRef();

  public componentDidMount() {
    if (this.elemRef) {
      fb.initialize();
      fb.createLoginOptions("#fb");
    }
  }

  public render() {
    return <div id="fb" />;
  }
}
