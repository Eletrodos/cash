import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

import SignIn from "../pages/SignIn";
import Groups from "../pages/Groups";
import Home from "../pages/Home";
import Group from "../pages/Group";

const history = createBrowserHistory();

const AppRouter: React.FC = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/groups" exact component={Groups} />
      <Route path="/group/:id" exact component={Group} />
      <Route path="/signIn/" exact component={SignIn} />
    </Router>
  );
};

export default AppRouter;
