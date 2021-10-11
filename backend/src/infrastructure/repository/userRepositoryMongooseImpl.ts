import UserRepository from "../../domain/userRepository";
import {Role, User} from "../../domain/user";
import UserMongooseModel from "../mongoose/UserMongooseModel";

export default class UserRepositoryMongooseImpl implements UserRepository {
    async findAll(): Promise<User[]> {
        const documents = await UserMongooseModel.find();
        return Promise.all(documents.map(document => {
           return {
               id: document._id,
               nickname: document.nickname,
               firstname: document.firstname,
               lastname: document.lastname,
               roles: document.roles.map(role => role as Role)
           }
        }));
    }
}