import {Request, Response} from "express";
import CreateMaintenanceUseCase, {NewCreateMaintenanceRequest} from "../../application/useCase/CreateMaintenanceUseCase";
import GetAllCarsUseCase from "../../application/useCase/GetAllCarsUseCase";
import GetAllMaintenancesUseCase, {NewGetAllMaintenancesRequest} from "../../application/useCase/GetAllMaintenancesUseCase";

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

export { GetAllMaintenances, CreateMaintenance }
