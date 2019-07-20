import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

import SignIn from "../pages/SignIn";
import Groups from "../pages/Groups";
import Home from "../pages/Home";

const history = createBrowserHistory();

const AppRouter: React.FC = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/groups" exact component={Groups} />
      <Route path="/signIn/" component={SignIn} />
    </Router>
  );
};

export default AppRouter;
