import express from "express";
import {GetAllCars} from "../infrastructure/controller/carController";

let router = express.Router();

router.get('/', GetAllCars);

export default router;