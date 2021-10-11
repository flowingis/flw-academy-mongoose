import {Request, Response} from "express";
import GetAllCarsUseCase from "../../application/useCase/GetAllCarsUseCase";

const GetAllCars = async (req: Request, res: Response) => {
    const cars = await GetAllCarsUseCase();
    res.send(cars);
}

export { GetAllCars }
