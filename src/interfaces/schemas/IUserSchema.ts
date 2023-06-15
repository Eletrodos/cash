export default interface IUserSchema {
  /** Representação de nome da moeda */
  displayName: string
  /** Representação gráfica da moeda */
  pictureUrl?: string
  /** Moeda que o usuário possui */
  currencyIds: string[]
}