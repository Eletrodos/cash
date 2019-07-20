import { createContext } from "react";

export interface IAuthState {
  isLogged: boolean;
}

const AuthContext = createContext<IAuthState>({
  isLogged: false
});

export default AuthContext;
export const Provider = AuthContext.Provider;
