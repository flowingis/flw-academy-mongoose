import {Progress, Severity} from "../../domain/maintenance";
import MaintenanceRepositoryMongooseImpl from "../../infrastructure/repository/maintenanceRepositoryMongooseImpl";

const repository = new MaintenanceRepositoryMongooseImpl();

export type CreateMaintenanceRequest = {
    carId: string,
    reportingDate: Date,
    assigneeId: string,
    assignerId: string,
    faultDescription: string,
    severity: Severity,
    acceptanceDate: Date,
    expectedTerminationDate: Date,
    progress: Progress,
    notes: string,
}

export const NewCreateMaintenanceRequest = (
    carId: string,
    assigneeId: string,
    assignerId: string,
    faultDescription: string,
    severity: string,
    acceptanceDate: string,
    expectedTerminationDate: string,
    progress: string,
    notes: string,
): CreateMaintenanceRequest => {
    const now = new Date();
    return <CreateMaintenanceRequest>{
        carId,
        reportingDate: now,
        assigneeId,
        assignerId,
        faultDescription,
        severity,
        acceptanceDate: new Date(acceptanceDate),
        expectedTerminationDate: new Date(expectedTerminationDate),
        progress,
        notes
    };
}

const createMaintenanceUseCase = async (request: CreateMaintenanceRequest): Promise<void> => {
    await repository.create(request);
}

export default createMaintenanceUseCase;
