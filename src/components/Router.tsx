import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Groups from "../pages/Groups";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route path="/groups" exact component={Groups} />
      <Route path="/signIn/" component={SignIn} />
    </Router>
  );
};

export default AppRouter;
