import { FirebaseAuth } from "@firebase/auth-types";
import IAuthService from "../interfaces/services/IAuthService";

export default class AuthService implements IAuthService {
  #auth: FirebaseAuth;

  constructor(auth: FirebaseAuth) {
    this.#auth = auth;
  }

  public async login(email: string, password: string): Promise<string> {
    const result = await this.#auth.signInWithEmailAndPassword(email, password);
    if (!result.user) throw new Error("Email/Senha inválidos");
    return result.user.uid;
  }

  public async register(email: string, password: string): Promise<string> {
    const result = await this.#auth.createUserWithEmailAndPassword(email, password);
    if (!result.user) throw new Error("Erro ao criar usuário");
    return result.user.uid;
  }
}