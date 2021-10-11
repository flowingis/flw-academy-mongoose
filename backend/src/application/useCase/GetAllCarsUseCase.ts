import {Car} from "../../domain/car";
import CarRepositoryMongooseImpl from "../../infrastructure/repository/carRepositoryMongooseImpl";

const repository = new CarRepositoryMongooseImpl();

const GetAllCarsUseCase = async (): Promise<Car[]> => await repository.findAll();

export default GetAllCarsUseCase;