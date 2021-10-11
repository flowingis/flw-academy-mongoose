import {User} from "./user";

export default interface UserRepository {
    findAll(): Promise<User[]>;
}