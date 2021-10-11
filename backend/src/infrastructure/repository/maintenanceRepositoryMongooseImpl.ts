import MaintenanceRepository from "../../domain/maintenanceRepository";
import {CreateMaintenanceRequest} from "../../application/useCase/CreateMaintenanceUseCase";
import MaintenanceMongooseModel from "../mongoose/MaintenanceMongooseModel";
import {GetAllMaintenancesRequest} from "../../application/useCase/GetAllMaintenancesUseCase";
import {Maintenance} from "../../domain/maintenance";

export default class MaintenanceRepositoryMongooseImpl implements MaintenanceRepository {
    async create(data: CreateMaintenanceRequest): Promise<void> {
        const maintenance = new MaintenanceMongooseModel(data);
        await maintenance.save();
    }

    async find(query: GetAllMaintenancesRequest): Promise<Maintenance[]> {
        return await MaintenanceMongooseModel.schema.methods.FindWithAggregation(
            this.getFindParams(query)
        );
    }

    getFindParams(query: GetAllMaintenancesRequest): any {
        let params: any = {};

        if (query.reportingDateFrom !== undefined && query.reportingDateTo !== undefined) {
            params["reportingDate"] = {
                $gte: new Date(query.reportingDateFrom),
                $lte: new Date(query.reportingDateTo),
            };
        } else if (query.reportingDateFrom !== undefined) {
            params["reportingDate"] = {
                $gte: new Date(query.reportingDateFrom),
            };
        } else if (query.reportingDateTo !== undefined) {
            params["reportingDate"] = {
                $lte: new Date(query.reportingDateTo),
            };
        }

        return params;
    }
}