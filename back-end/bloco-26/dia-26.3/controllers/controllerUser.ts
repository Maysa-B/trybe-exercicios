import { Request, Response } from "express";
import INewUserBody from "../interfaces/bodyUser";
import UserService from "../services/serviceUser";

// o controller é interessante fazer funcional:
/*

const getAll = async (req: Request, res: Response) => {
  const service = new UserService();
  const result = await service.getAll();
  res.status(200).json(result);
}

*/

class UserController {
  service = new UserService();

  getAll = async (req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.status(200).json(result);
  }

  getById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getById(JSON.parse(id));
    res.status(200).json(result);
  }

  insertNewUser = async (req: Request<{}, {}, INewUserBody>, res: Response) => {
    const result = await this.service.insertNewUser(req.body);
    res.status(200).json({ message: result});
  }
}

export default UserController;