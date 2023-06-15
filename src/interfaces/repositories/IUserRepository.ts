import UserModel from "../../models/UserModel";
import IRepository from "./base/IRepository";

export default interface IUserRepository extends IRepository<UserModel> { }