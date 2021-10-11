import {Request, Response} from "express";
import GetAllUsersUseCase from "../../application/useCase/GetAllUsersUseCase";

const GetAllUsers = async (req: Request, res: Response) => {
    const users = await GetAllUsersUseCase();
    res.send(users);
}

export { GetAllUsers }
