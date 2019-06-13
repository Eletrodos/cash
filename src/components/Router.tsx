import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Groups from "../pages/Groups";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/groups" exact component={Groups} />
      <Route path="/signIn/" component={SignIn} />
    </Router>
  );
};

export default AppRouter;
