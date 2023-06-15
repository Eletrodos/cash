import IUserSchema from "../interfaces/schemas/IUserSchema";
import Model from "./base/Model";
import CurrencyModel from "./CurrencyModel";

/**
 * Domínio com regras de negocio referente ao usuário
 */
export default class UserModel extends Model<IUserSchema> {
  public currencies: CurrencyModel[] = [];

  public addCurrency(currency: CurrencyModel) {
    if (this.currencies.some((c) => c.id === currency.id)) {
      throw new Error(`Moeda "${currency.id}" já adicionada`);
    }

    this.currencies.push(currency);
    this._schema.currencyIds.push(currency.id);
  }
}