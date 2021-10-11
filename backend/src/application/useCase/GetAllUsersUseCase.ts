import {User} from "../../domain/user";
import CarRepositoryMongooseImpl from "../../infrastructure/repository/carRepositoryMongooseImpl";
import UserRepositoryMongooseImpl from "../../infrastructure/repository/userRepositoryMongooseImpl";

const repository = new UserRepositoryMongooseImpl();

const GetAllUsersUseCase = async (): Promise<User[]> => await repository.findAll();

export default GetAllUsersUseCase;