import {Car} from "./car";

export default interface CarRepository {
    findAll(): Promise<Car[]>;
}