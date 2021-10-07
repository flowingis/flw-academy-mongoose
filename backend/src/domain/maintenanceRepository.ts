import {CreateMaintenanceRequest} from "../application/useCase/createMaintenanceUseCase";

export default interface MaintenanceRepository {
    create(data: CreateMaintenanceRequest): void;
}