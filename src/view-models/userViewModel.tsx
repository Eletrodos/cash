import IUserService from "../interfaces/services/IUserService";

class RegisterViewModel {
  #userService: IUserService;

  public displayName: string = "";
  public displayName: string = "";


  constructor(userService: IUserService) {
    this.#userService = userService;
  }
}