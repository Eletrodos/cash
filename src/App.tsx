import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { auth } from "./services/fb";
import { User } from "firebase";

import AppRouter from "./components/Router";
import { Provider, IAuthState } from "./services/hooks/auth";

const defaultAuthState: IAuthState = {
  isLogged: false,
  isLoading: true
};

/** Aplicação principal */
const App: React.FC = () => {
  const [authState, setAuthState] = useState(defaultAuthState);

  useEffect(() => {
    auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        setAuthState({ isLogged: true, isLoading: false });
      } else {
        setAuthState({ isLogged: false, isLoading: false });
      }
    });
  }, []);

  return (
    <Provider value={authState}>
      <CssBaseline />
      <AppRouter />
    </Provider>
  );
};

export default App;
