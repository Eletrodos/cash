import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signIn/" component={SignIn} />
    </Router>
  );
};

export default AppRouter;
