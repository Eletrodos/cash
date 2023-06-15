import Model from "../../../models/base/Model"

export default interface IRepository<T extends Model<any>> {
  set(model: T): Promise<void>
  update(model: T): Promise<void>
  getById(id: string): Promise<T | undefined>
  remove(model: T): Promise<void>
}