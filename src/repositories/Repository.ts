import {
  CollectionReference,
  Firestore,
  collection,
  doc,
  getDoc,
  deleteDoc,
  setDoc,
  updateDoc
} from "firebase/firestore";
import Model from "../models/base/Model";
import IRepository from "../interfaces/repositories/base/IRepository";

export default class Repository<T extends Model<any>> implements IRepository<T> {
  protected _collectionRef: CollectionReference
  protected _modelFactory: (new (id: string, schema: any) => T);

  constructor(
    firestore: Firestore,
    collectionPath: string,
    modelFactory: (new (id: string, schema: any) => T)
  ) {
    this._collectionRef = collection(firestore, collectionPath);
    this._modelFactory = modelFactory;
  }

  public async set(model: T): Promise<void> {
    const ref = doc(this._collectionRef, model.id);
    const data = model.toObject();
    return await setDoc(ref, data);
  };

  public async update(model: T): Promise<void> {
    const ref = doc(this._collectionRef, model.id);
    const data = model.toObject();
    return await updateDoc(ref, data);
  };

  public async getById(id: string): Promise<T | undefined> {
    const ref = doc(this._collectionRef, id);
    const snapshot = await getDoc(ref);
    const data = snapshot.data();
    return new this._modelFactory(id, data);
  };

  public async remove(model: T): Promise<void> {
    const ref = doc(this._collectionRef, model.id);
    await deleteDoc(ref);
  };
}