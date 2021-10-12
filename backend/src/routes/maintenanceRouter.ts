import express from "express";
import {
    CloseMaintenance,
    CreateMaintenance,
    DeleteMaintenance,
    GetAllMaintenances
} from "../infrastructure/controller/maintenanceController";

let router = express.Router();

router.get('/', GetAllMaintenances);

router.post('/', CreateMaintenance);

router.patch('/:id/close', CloseMaintenance);

router.delete('/:id', DeleteMaintenance);

export default router;