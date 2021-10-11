import MaintenanceRepositoryMongooseImpl from "../../infrastructure/repository/maintenanceRepositoryMongooseImpl";
import {Maintenance, Progress, Severity} from "../../domain/maintenance";
import {CreateMaintenanceRequest} from "./CreateMaintenanceUseCase";

const repository = new MaintenanceRepositoryMongooseImpl();

export type GetAllMaintenancesRequest = {
    reportingDateFrom: Date | undefined,
    reportingDateTo: Date | undefined
}

export const NewGetAllMaintenancesRequest = (
    reportingDateFrom?: string,
    reportingDateTo?: string
): GetAllMaintenancesRequest => {
    const now = new Date();
    return <GetAllMaintenancesRequest>{
        reportingDateFrom: reportingDateFrom ? new Date(reportingDateFrom) : undefined,
        reportingDateTo: reportingDateTo ? new Date(reportingDateTo) : undefined
    };
}

const GetAllMaintenancesUseCase = async (request: GetAllMaintenancesRequest): Promise<Maintenance[]> => await repository.find(request)

export default GetAllMaintenancesUseCase;