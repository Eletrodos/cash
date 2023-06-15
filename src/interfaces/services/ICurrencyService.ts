import CurrencyModel from "../../models/CurrencyModel";

export default interface ICurrencyService {
  /** Obtém um CurrencyDomain através de seu ID */
  get: (id: string) => Promise<CurrencyModel>;
  /** Sobrescreve todos os dados de uma currency */
  set: (currency: CurrencyModel) => Promise<void>;
  /** Atualiza os dados da currency */
  update: (currency: CurrencyModel) => Promise<void>;
}