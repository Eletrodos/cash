interface INonExistsPersistenceResult {
  exists: false
  id: string,
}

interface IExistsPersistenceResult {
  exists: true
  id: string,
  data: object,
}

export type PersistenceResult = INonExistsPersistenceResult | IExistsPersistenceResult;

export default interface IPersistenceService {
  /** Obtém através de seu ID */
  get: (path: string) => Promise<PersistenceResult>;
  /** Sobrescreve os dados  */
  set: (path: string, schema: object) => Promise<void>;
  /** Atualiza os dados */
  update: (path: string, schema: object) => Promise<void>;
}