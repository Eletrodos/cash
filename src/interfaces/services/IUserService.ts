import UserDomain from "../../models/UserModel";

export default interface IUserService {
  /** Obtém um UserDomain através de seu ID */
  get: (id: string) => Promise<UserDomain>;
  /** Sobrescreve todos os dados do usuário */
  set: (user: UserDomain) => Promise<void>;
  /** Atualiza os dados do usuário */
  update: (user: UserDomain) => Promise<void>;
}