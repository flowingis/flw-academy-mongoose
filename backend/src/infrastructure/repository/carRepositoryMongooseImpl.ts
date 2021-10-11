import CarRepository from "../../domain/carRepository";
import {Car} from "../../domain/car";
import CarMongooseModel from "../mongoose/CarMongooseModel";

export default class CarRepositoryMongooseImpl implements CarRepository {
    async findAll(): Promise<Car[]> {
        const documents = await CarMongooseModel.find();
        return Promise.all(documents.map(document => {
           return {
               id: document._id,
               plate: document.plate,
               brand: document.brand,
               model: document.model,
               year: document.year
           }
        }));
    }
}