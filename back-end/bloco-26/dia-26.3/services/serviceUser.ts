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
}

export default UserService;