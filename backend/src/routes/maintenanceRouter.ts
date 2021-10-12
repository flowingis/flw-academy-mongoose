import express, {Request, Response} from "express";
import {
    CloseMaintenance,
    CreateMaintenance,
    GetAllMaintenances
} from "../infrastructure/controller/maintenanceController";

let router = express.Router();

router.get('/', GetAllMaintenances);

router.post('/', CreateMaintenance);

router.patch('/:id/close', CloseMaintenance);

router.delete('/:id', (req: Request, res: Response) => {
    console.log(req.params)
    res.send();
});

export default router;