export default class Model<T> {
  protected _id: string;
  protected _schema: T;

  public get id() {
    return this._id;
  }

  public toObject() {
    return {
      ...this._schema
    }
  }

  constructor(id: string, schema: T) {
    this._id = id;
    this._schema = schema;
  }
}