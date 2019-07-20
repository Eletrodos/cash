import { createContext } from "react";

export interface IAuthState {
  isLogged: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthState>({
  isLogged: false,
  isLoading: false
});

export default AuthContext;
export const Provider = AuthContext.Provider;
