import MaintenanceRepository from "../../domain/maintenanceRepository";
import {CreateMaintenanceRequest} from "../../application/useCase/createMaintenanceUseCase";
import MaintenanceMongooseModel from "../mongoose/MaintenanceMongooseModel";

export default class MaintenanceRepositoryMongooseImpl implements MaintenanceRepository {
    async create(data: CreateMaintenanceRequest): Promise<void> {
        const maintenance = new MaintenanceMongooseModel(data);
        await maintenance.save();
    }
}