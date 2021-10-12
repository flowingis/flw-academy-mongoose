import MaintenanceRepositoryMongooseImpl from "../../infrastructure/repository/maintenanceRepositoryMongooseImpl";

const repository = new MaintenanceRepositoryMongooseImpl();

export type DeleteMaintenanceRequest = {
    maintenanceId: string
}

export const NewDeleteMaintenanceRequest = (
    maintenanceId: string
): DeleteMaintenanceRequest => {
    return <DeleteMaintenanceRequest>{
        maintenanceId
    };
}

const DeleteMaintenanceUseCase = async (request: DeleteMaintenanceRequest): Promise<void> => {
    await repository.delete(request);
}

export default DeleteMaintenanceUseCase;
