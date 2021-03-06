import {Request, Response} from "express";
import CreateMaintenanceUseCase, {NewCreateMaintenanceRequest} from "../../application/useCase/CreateMaintenanceUseCase";
import GetAllMaintenancesUseCase, {NewGetAllMaintenancesRequest} from "../../application/useCase/GetAllMaintenancesUseCase";
import CloseMaintenanceUseCase, {NewCloseMaintenanceRequest} from "../../application/useCase/CloseMaintenanceUseCase";
import DeleteMaintenanceUseCase, {NewDeleteMaintenanceRequest} from "../../application/useCase/DeleteMaintenanceUseCase";

const GetAllMaintenances = async (req: Request, res: Response) => {
    const result = await GetAllMaintenancesUseCase(
        NewGetAllMaintenancesRequest(
            req.query.reportingDateFrom?.toString(),
            req.query.reportingDateTo?.toString(),
        )
    ).catch(err => res.status(400).send(err.message))

    res.status(200).send(result);
}

const CreateMaintenance = async (req: Request, res: Response) => {
    await CreateMaintenanceUseCase(
        NewCreateMaintenanceRequest(
            req.body.carId,
            req.body.assigneeId,
            req.body.assignerId,
            req.body.faultDescription,
            req.body.severity,
            req.body.acceptanceDate,
            req.body.expectedTerminationDate,
            req.body.progress,
            req.body.notes,
        )
    ).catch(err => res.status(400).send(err.message))

    res.status(200).send();
}

const CloseMaintenance = async (req: Request, res: Response) => {
    await CloseMaintenanceUseCase(
        NewCloseMaintenanceRequest(req.params.id)
    ).catch(err => res.status(400).send(err.message))

    res.status(200).send();
}

const DeleteMaintenance = async (req: Request, res: Response) => {
    await DeleteMaintenanceUseCase(
        NewDeleteMaintenanceRequest(req.params.id)
    ).catch(err => res.status(400).send(err.message))

    res.status(200).send();
}

export {
    GetAllMaintenances,
    CreateMaintenance,
    CloseMaintenance,
    DeleteMaintenance
}
