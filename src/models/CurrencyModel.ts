import ICurrencySchema from "../interfaces/schemas/ICurrencySchema";
import Model from "./base/Model";
import UserModel from "./UserModel";

/**
 * Domínio com regras de negocio referente a moeda
 */
export default class CurrencyModel extends Model<ICurrencySchema> {
  /** Dono da moeda */
  public owner?: UserModel

  constructor(id: string, schema: ICurrencySchema) {
    super(id, schema);
  }

  /** Define o novo dono desta moeda */
  public setOwner = (owner: UserModel) => {
    this.owner = owner;
    this._schema.ownerId = owner.id;
  }
}