import {Request, Response} from "express";
import createMaintenanceUseCase, {NewCreateMaintenanceRequest} from "../../application/useCase/createMaintenanceUseCase";

const CreateMaintenance = async (req: Request, res: Response) => {
    await createMaintenanceUseCase(
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

export { CreateMaintenance }
