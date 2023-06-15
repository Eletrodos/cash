export default interface IRegisterUserUseCase {
  execute(email: string, password: string, displayName: string): Promise<void>
}