import express, {Request, Response} from "express";
import {CreateMaintenance, GetAllMaintenances} from "../infrastructure/controller/maintenanceController";

let router = express.Router();

router.get('/', GetAllMaintenances);

router.post('/', CreateMaintenance);

router.patch('/:id/close', (req: Request, res: Response) => {
    console.log(req.params)
    res.send();
});

router.delete('/:id', (req: Request, res: Response) => {
    console.log(req.params)
    res.send();
});

export default router;