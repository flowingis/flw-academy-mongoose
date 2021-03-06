import {CreateMaintenanceRequest} from "../application/useCase/CreateMaintenanceUseCase";
import {GetAllMaintenancesRequest} from "../application/useCase/GetAllMaintenancesUseCase";
import {Maintenance} from "./maintenance";
import {CloseMaintenanceRequest} from "../application/useCase/CloseMaintenanceUseCase";
import {DeleteMaintenanceRequest} from "../application/useCase/DeleteMaintenanceUseCase";

export default interface MaintenanceRepository {
    create(data: CreateMaintenanceRequest): void;
    find(query: GetAllMaintenancesRequest): Promise<Maintenance[]>;
    close(data: CloseMaintenanceRequest): Promise<void>
    delete(data: DeleteMaintenanceRequest): Promise<void>
}
