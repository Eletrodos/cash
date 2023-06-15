import IUserRepository from "../interfaces/repositories/IUserRepository";
import IAuthService from "../interfaces/services/IAuthService";
import IRegisterUserUseCase from "../interfaces/use-cases/IRegisterUserUseCase";
import UserModel from "../models/UserModel";

export default class RegisterUserUseCase implements IRegisterUserUseCase {
  #userRepository: IUserRepository
  #authService: IAuthService

  constructor(userRepository: IUserRepository, authService: IAuthService) {
    this.#userRepository = userRepository;
    this.#authService = authService;
  }

  async execute(email: string, password: string, displayName: string) {
    // Cria um novo usuário
    const id = await this.#authService.register(email, password)

    // Define os dados do novo usuário
    const user = new UserModel(id, {
      currencyIds: [],
      displayName: displayName,
    })

    // Persiste o usuário
    this.#userRepository.set(user);
  }
}