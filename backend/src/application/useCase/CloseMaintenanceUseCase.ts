import MaintenanceRepositoryMongooseImpl from "../../infrastructure/repository/maintenanceRepositoryMongooseImpl";

const repository = new MaintenanceRepositoryMongooseImpl();

export type CloseMaintenanceRequest = {
    maintenanceId: string
}

export const NewCloseMaintenanceRequest = (
    maintenanceId: string
): CloseMaintenanceRequest => {
    return <CloseMaintenanceRequest>{
        maintenanceId
    };
}

const CloseMaintenanceUseCase = async (request: CloseMaintenanceRequest): Promise<void> => {
    await repository.close(request);
}

export default CloseMaintenanceUseCase;
