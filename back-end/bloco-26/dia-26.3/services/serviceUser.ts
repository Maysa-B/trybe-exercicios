import { RowDataPacket } from "mysql2";
import INewUserBody from "../interfaces/bodyUser";
import User from "../interfaces/user";
import connection from "../models/model";
import UserModel from "../models/modelUser";

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  getAll = async (): Promise<User[]> => {
    const users = await this.model.getAll();
    return users;
  }

  getById = async (id: number): Promise<User> => {
    const user = await this.model.getById(id);
    return user;
  }

  insertNewUser = async (body: INewUserBody): Promise<RowDataPacket[]> => {
    const insertresult = await this.model.insertNewUser(body);
    return insertresult;
  }

  updateUser = async (id: string, body: INewUserBody): Promise<RowDataPacket[]> => {
    const updateResult = await this.model.updateUser(id, body);
    return updateResult;
  }

  deleteUser = async (id: string): Promise<RowDataPacket[]> => {
    const deleteResult = await this.model.deleteUser(id);
    return deleteResult;
  }
}

export default UserService;