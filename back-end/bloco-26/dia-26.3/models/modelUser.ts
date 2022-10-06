import User from "../interfaces/user";
import { Pool, RowDataPacket } from 'mysql2/promise';

class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async () :Promise<User[]> => {
    const result = await this.connection.execute('SELECT * FROM Users');
    const [rows] = result;
    return rows as User[];
  }

  getById = async (id: number) :Promise<User> => {
    const result = await this.connection.execute<RowDataPacket[] & User>('SELECT * FROM Users WHERE id = ?', [id]);
    const [element] = result;
    return element[0] as User;
  }

  insertId = async () => {
    const inserting = await this.connection.execute<RowDataPacket[]>('INSERT INTO Users () VALUES ()');
    return inserting;
  }
}

export default UserModel;