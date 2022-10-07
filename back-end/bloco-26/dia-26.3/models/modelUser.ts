import User from "../interfaces/user";
import { Pool, RowDataPacket } from 'mysql2/promise';
import INewUserBody from "../interfaces/bodyUser";

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

  insertNewUser = async (body: INewUserBody):Promise<RowDataPacket[]> => {
    const [inserting] = await this.connection.execute<RowDataPacket[]>('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [body.name, body.email, body.password]);
    return inserting;
  }

  updateUser = async (id: string, body: INewUserBody):Promise<RowDataPacket[]> => {
    const [inserting] = await this.connection.execute<RowDataPacket[]>(`UPDATE Users
    SET name = ?, email = ?, password = ?
    WHERE id = ?`, [body.name, body.email, body.password, id]);
    return inserting;
  }


  deleteUser = async (id: string):Promise<RowDataPacket[]> => {
    const [deleting] = await this.connection.execute<RowDataPacket[]>(`DELETE from Users
    WHERE id = ?`, [id]);
    return deleting;
  }
}

export default UserModel;