import IUserRepository from "../interfaces/repositories/IUserRepository";
import IAuthService from "../interfaces/services/IAuthService";
import RegisterUserUseCase from "../use-cases/RegisterUserUseCase";

export default class UserService {
  #userRepository: IUserRepository;
  #authService: IAuthService;

  constructor(userRepository: IUserRepository, authService: IAuthService) {
    this.#userRepository = userRepository;
    this.#authService = authService;
  }

  /**
   * Cria um novo usuário
   * @param email Email do usuário
   * @param password Senha do usuáriop
   * @param displayName Nome do usuário
   */
  async register(email: string, password: string, displayName: string) {
    const useCase = new RegisterUserUseCase(this.#userRepository, this.#authService);
    useCase.execute(email, password, displayName);
  }
}