import express from "express";
import {GetAllUsers} from "../infrastructure/controller/userController";

let router = express.Router();

router.get('/', GetAllUsers);

export default router;